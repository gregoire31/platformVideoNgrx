import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogsComponent } from './component/catalogs/catalogs.component';
import { AuthentificationComponent } from './component/authentification/authentification.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material/app-material-module';
import { WrongPasswordModalComponent } from './modals/wrong-password-modal/wrong-password-modal.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EllipsisModule } from 'ngx-ellipsis';
import { DetailFilmComponent } from './component/detail-film/detail-film.component';
import { AuthInterceptor } from './interceptor/authInterceptor';
import { PaymentComponent } from './modals/payment/payment.component';
@NgModule({
  declarations: [
    AppComponent,
    CatalogsComponent,
    AuthentificationComponent,
    WrongPasswordModalComponent,
    DetailFilmComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FlexLayoutModule,
    EllipsisModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
        JwtHelperService
  ],
  entryComponents : [WrongPasswordModalComponent, PaymentComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
