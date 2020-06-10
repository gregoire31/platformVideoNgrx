import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogsComponent } from './component/catalogs/catalogs.component';
import { AuthentificationComponent } from './component/authentification/authentification.component';
import { AuthentificationGuard } from './guard/authentification.guard';
import { DetailFilmComponent } from './component/detail-film/detail-film.component';


const routes: Routes = [
  { path: 'catalogs-component', component: CatalogsComponent, canActivate: [AuthentificationGuard] },
  { path: '', component: AuthentificationComponent },
  { path: 'detail-film/:id', component: DetailFilmComponent, canActivate: [AuthentificationGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
