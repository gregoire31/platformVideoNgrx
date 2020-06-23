import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogsService } from 'src/app/service/catalogs.service';
import { AuthService } from 'src/app/service/auth.service';
import { Store } from '@ngrx/store';
import { FilmListStore } from 'src/app/interface/film-interface';
import * as catalogActions from '../../store/catalog/action';
@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.css']
})
export class CatalogsComponent implements OnInit {
  public listFilms: FilmListStore = {
    isFetching : false,
    getListFilm : [{
      _id : '',
      description: '',
      image: '',
      prix: '',
      title: ''
    }]
  }
  constructor(
    private route: Router,
    private catalogService: CatalogsService,
    private authService: AuthService,
    private store: Store) { }

  ngOnInit(): void {
    this.catalogService.getListFilms().subscribe(
      (response) => {
        this.listFilms.getListFilm = response;
        const getListFilm = response;
        console.log(getListFilm);
        this.store.dispatch(new catalogActions.initialiseStateCatalogs(getListFilm));
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }

  logOut() {
    this.authService.logout()
  }
  goToCatalogs(){
    this.catalogService.goToCategories()
  }

  goToDetailFilm(idFilm){
    this.route.navigate(['/detail-film', idFilm])
  }

}
