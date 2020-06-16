import { userList } from 'src/app/interface/user-interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogsService } from 'src/app/service/catalogs.service';
import { AuthService } from 'src/app/service/auth.service';
import { forkJoin, Observable } from 'rxjs';

import * as moment from 'moment';
import { timeLeft, FilmListStoreDetail, authorizationDownload } from 'src/app/interface/film-interface';
import { CommentsService } from 'src/app/service/comments.service';
import { Comments, CommentStore } from 'src/app/interface/comment-interface';
import { PaymentComponent } from 'src/app/modals/payment/payment.component';
import { MatDialog } from '@angular/material/dialog';
import { DetailService } from 'src/app/service/detail.service';
import { Store } from '@ngrx/store';
import * as detailAction from '../../store/detail/action';
import * as commentAction from '../../store/comment/action';
import * as selectDetail from '../../store/detail/selector';
@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.css']
})

export class DetailFilmComponent implements OnInit {
  public noComment = true;
  // tslint:disable-next-line: ban-types
  public id: String = '';
  public commentToSend = '';
  public commentaires: CommentStore = {
    getListComment: {
      _id: '',
      comments : [{
        userId: '',
        message: '',
        dateCreated: '',
        username : ''
      }]
    }
};
  public film: FilmListStoreDetail = {
    getListFilm : {
      description: '',
      image : '',
      prix: '',
      title: '',
      usersPayed : [{
        userId: '',
        dateCreated: '',
        date: ''
      }],
      _id: '',
      canDownload: {
        hasPayed: false,
        date: ''
      }
    }
  };
  public filmObs: Observable<FilmListStoreDetail>;
  public timeLeft: timeLeft = {
    hour: 0,
    minute: 0
  };
  public isPayed = false;
  public any = {};
  public currentUserId = '';
  public currentUserName = '';
  constructor(private route: ActivatedRoute,
              private catalogService: CatalogsService,
              private authService: AuthService,
              private commentService: CommentsService,
              public dialog: MatDialog,
              private detailService: DetailService,
              private store: Store) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    const detailFilm = this.catalogService.getDetailFilm(this.id);
    // tslint:disable-next-line: no-shadowed-variable
    const userList = this.authService.getUserList();
    this.currentUserId = this.authService.getIdCurrentUser();
    const commentsList = this.commentService.getCommentList(this.id);

    forkJoin([detailFilm, userList, commentsList]).subscribe(results => {
      this.film.getListFilm =  {
        _id : results[0]._id,
        description : results[0].description,
        image : results[0].image,
        prix: results[0].prix,
        title: results[0].title,
        canDownload : {
          hasPayed: false,
          date: ''
        },
        usersPayed : results[0].usersPayed
      };
      if (results[2] !== null){
        this.commentaires.getListComment._id = results[2]._id;
        this.commentaires.getListComment.comments = results[2].comments;
        if (this.commentaires !== null){
          this.noComment = false;
          let nameMap: {
            [userId: string]: string
          };
          nameMap = results[1].reduce((accumulator, currentValue: userList) => ({
            ...accumulator, [currentValue._id] : currentValue.username
          }), {});
          this.commentaires.getListComment.comments = this.commentaires.getListComment.comments.map( comment => {
            console.log(nameMap[comment.userId].valueOf()) ;
            return comment;
          });
          this.commentaires.getListComment.comments = this.commentaires.getListComment.comments.map(
              comment => {
                results[1].map(
                  user => {
                    if (user._id === comment.userId){
                      comment.username = user.username;
                    }
                  }
                );
                return comment;
              }
            );
        }
        this.store.dispatch(new commentAction.InitializeCommentList(this.commentaires));
      }
      this.film.getListFilm.usersPayed.map(
        userPay => {
              if (this.currentUserId === userPay.userId){
                const authorization: authorizationDownload = {hasPayed : true, date : userPay.dateCreated};
                this.film.getListFilm.canDownload = authorization;
                // this.film = {
                //   ...this.film,
                //   getListFilm : {...this.film.getListFilm, canDownload : authorization}
                // };
                // this.film.getListFilm.canDownload = authorization;
                // this.store.dispatch(new detailAction.updateDetailUserPayed(authorization));
              }
        });

      if (this.film.getListFilm.canDownload.hasPayed){
        const timeMinuteLeft = 1440 - Number(moment().diff(moment(this.film.getListFilm.canDownload.date), 'minutes'));
        if (timeMinuteLeft <= 1440 || timeMinuteLeft > 1440 ){
          this.timeLeft.hour = Number(Math.trunc(timeMinuteLeft / 60));
          this.timeLeft.minute = Number(timeMinuteLeft - (this.timeLeft.hour * 60));
        }
        if (timeMinuteLeft < 0){
          const authorization: authorizationDownload = {hasPayed : false, date : this.film.getListFilm.canDownload.date};
          this.film.getListFilm.canDownload = authorization;
          // this.film = {
          //   ...this.film,
          //   getListFilm : {...this.film.getListFilm, canDownload : authorization}
          // };
        }
      }

      this.store.dispatch(new detailAction.initialiseStateDetail(this.film.getListFilm));
      this.store.select(selectDetail.getListDetails).subscribe(film => {
        this.film = film;
      });
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PaymentComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        const hourActual = String(moment().format('YYYY-MM-DD HH:MM'));
        this.detailService.acceptUserPaiement(String(this.id), this.currentUserId, hourActual).subscribe(data => {

          data.usersPayed.forEach(user => {
            if (user.userId === this.currentUserId){
              const authorization: authorizationDownload = {hasPayed : true, date : user.dateCreated};
              this.store.dispatch(new detailAction.updateDetailUserPayed(authorization));
              // this.film = {
              //   ...this.film,
              //   getListFilm : {...this.film.getListFilm, canDownload : authorization}
              // };
              this.store.dispatch(new detailAction.updateDetailUserPayed(authorization));
            }
          });
          // this.film.canDownload = {
          //   hasPayed : data.canDownload,
          //   date: data.hourActual
          // }
          const timeMinuteLeft = 1440;
          this.timeLeft.hour = Number(Math.trunc(timeMinuteLeft / 60));
          this.timeLeft.minute = Number(timeMinuteLeft - (this.timeLeft.hour * 60));
        });
      }
    });
  }
  pay(){
    this.openDialog();
  }
  sendComment(){
    const hourActual = String(moment().format('YYYY-MM-DD-H-M'));
    const addComment = this.commentService.addComment(this.film.getListFilm._id, this.currentUserId, this.commentToSend, hourActual);
    // tslint:disable-next-line: no-shadowed-variable
    const userList = this.authService.getUserList();
    forkJoin([addComment, userList]).subscribe(results => {
      this.noComment = false;
      // this.commentaires.getListComment = results[0];
      console.log(results[0]);
      // this.commentaires.getListComment.comments = {
      //   ...this.commentaires.getListComment.comments,
      //   ...results[0]
      // };
      console.log(this.commentaires);
      // console.log(this.commentaires);
      // this.commentaires.getListComment.comments.map(
      //   comment => {
      //     console.log(comment);
      //     results[1].map(
      //       user => {
      //         if (user._id === comment.userId){
      //           // comment.username = user.username;
      //           comment = {
      //             ...comment,
      //             username : user.username
      //           };
      //           console.log(comment);
      //         }
      //       }
      //     );
      //   }
      // );
  });
}

logOut() {
  this.authService.logout();
}
goToCatalogs(){
  this.catalogService.goToCategories();
}

}
