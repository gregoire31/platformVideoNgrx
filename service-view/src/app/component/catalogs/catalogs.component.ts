import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogsService } from 'src/app/service/catalogs.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.css']
})
export class CatalogsComponent implements OnInit {
  public listFilms = []
  constructor(private route : Router, private catalogService : CatalogsService, private authService : AuthService) { }

  ngOnInit(): void {
    this.catalogService.getListFilms().subscribe(
      (response) => {
        this.listFilms = response
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
