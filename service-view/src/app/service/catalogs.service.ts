import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { Film } from '../interface/film-interface';
@Injectable({
  providedIn: 'root'
})
export class CatalogsService {

  constructor(private httpClient: HttpClient,public jwtHelper: JwtHelperService, private router : Router) { }

  getListFilms(){
    return this.httpClient
    .get<any[]>('http://localhost:3001/catalogs')
    
  }

  goToCategories(){
    this.router.navigateByUrl('/catalogs-component');
  }

  getDetailFilm(idFilm){
    return this.httpClient
    .get<Film>(`http://localhost:3003/detail/${idFilm}`)
  }
}
