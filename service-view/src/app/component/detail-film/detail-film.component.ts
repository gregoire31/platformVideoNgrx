import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogsService } from 'src/app/service/catalogs.service';
import { AuthService } from 'src/app/service/auth.service';
import { forkJoin } from 'rxjs';

import * as moment from 'moment';
import { timeLeft, FilmListStoreDetail } from 'src/app/interface/film-interface';
import { CommentsService } from 'src/app/service/comments.service';
import { Comments } from 'src/app/interface/comment-interface';
import { PaymentComponent } from 'src/app/modals/payment/payment.component';
import { MatDialog } from '@angular/material/dialog';
import { DetailService } from 'src/app/service/detail.service';

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.css']
})

export class DetailFilmComponent implements OnInit {
  public noComment = true;
  public id : String = ''
  public commentToSend = ""
  public commentaires : Comments = {
    _id: "",
    comments : [{
      userId: "",
      message: "",
      dateCreated: "",
    }]
}
  public film: FilmListStoreDetail = {
    getListFilm : {
      description: "",
      image : "",
      prix: "",
      title: "",
      usersPayed : [{
        userId: "",
        dateCreated: "",
        date: ""
      }],
      _id: "",
      canDownload: {
        hasPayed: false,
        date:""
      }
    }
  }
  public timeLeft: timeLeft = {
    hour: 0,
    minute: 0
  }
  public isPayed = false
  public any = {}
  public currentUserId = ""
  public currentUserName = ""
  constructor(private route: ActivatedRoute,
    private catalogService : CatalogsService,
    private authService : AuthService,
    private commentService: CommentsService,
    public dialog: MatDialog,
    private detailService : DetailService) {
    
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    let detailFilm = this.catalogService.getDetailFilm(this.id);
    let userList = this.authService.getUserList()
    this.currentUserId = this.authService.getIdCurrentUser()
    let commentsList = this.commentService.getCommentList(this.id)

    forkJoin([detailFilm, userList,commentsList]).subscribe(results => {
      console.log(results);
    
      this.film.getListFilm =  {
        _id : results[0]._id,
        description : results[0].description,
        image : results[0].image,
        prix: results[0].prix,
        title: results[0].title,
        canDownload : {
          hasPayed:false,
          date:''
        },
        usersPayed : results[0].usersPayed
      }
      this.commentaires = results[2]
      if(this.commentaires !== null){
        this.noComment = false
        this.commentaires.comments.map(
          comment => {
            results[1].map(
              user => {
                if(user._id ===comment.userId){
                  comment.username = user.username
                }
              }
            )
          }
        )
      }
      
      this.film.getListFilm.usersPayed.map(
        userPay => {
              if(this.currentUserId === userPay.userId){
                this.film.getListFilm.canDownload = {hasPayed : true, date : userPay.dateCreated}
              }
        })

      console.log(this.film.getListFilm);
      
      
      if(this.film.getListFilm.canDownload.hasPayed){
        let timeMinuteLeft = 1440 - Number(moment().diff(moment(this.film.getListFilm.canDownload.date), 'minutes'))
        
        if(timeMinuteLeft <= 1440 || timeMinuteLeft > 1440 ){
          this.timeLeft.hour = Number(Math.trunc(timeMinuteLeft / 60))
          this.timeLeft.minute = Number(timeMinuteLeft - (this.timeLeft.hour * 60))
        }
        if (timeMinuteLeft < 0){
          this.film.getListFilm.canDownload.hasPayed = false
        }
      }
      
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PaymentComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        let hourActual = String(moment().format("YYYY-MM-DD HH:MM"));
        this.detailService.acceptUserPaiement(String(this.id),this.currentUserId,hourActual).subscribe(data => {

          data.usersPayed.forEach(user => {
            if(user.userId === this.currentUserId){
              this.film.getListFilm.canDownload = {
                hasPayed : true,
                date: user.dateCreated
              }
            }
          });
          // this.film.canDownload = {
          //   hasPayed : data.canDownload,
          //   date: data.hourActual
          // }
          let timeMinuteLeft = 1440        
          this.timeLeft.hour = Number(Math.trunc(timeMinuteLeft / 60))
          this.timeLeft.minute = Number(timeMinuteLeft - (this.timeLeft.hour * 60))

        })
      }
    });
  }
  
  pay(){
    this.openDialog()
  }
  sendComment(){
    
    let hourActual = String(moment().format("YYYY-MM-DD-H-M"));
    let addComment = this.commentService.addComment(this.film.getListFilm._id,this.currentUserId,this.commentToSend,hourActual)
    let userList = this.authService.getUserList()
    forkJoin([addComment, userList]).subscribe(results => {
      this.noComment = false
      this.commentaires = results[0]
      
      this.commentaires.comments.map(
        comment => {
          
          results[1].map(
            user => {
              if(user._id ===comment.userId){
                comment.username = user.username
              }
            }
          )
        }
      )
      
  })
}

logOut() {
  this.authService.logout()
}
goToCatalogs(){
  this.catalogService.goToCategories()
}

}
