import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import * as moment from "moment";
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Router } from '@angular/router';
import { userList } from '../interface/user-interface';
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient,public jwtHelper: JwtHelperService, private router : Router) {

  }

  login(username:string, password:string ) {

      let body = { username : username, password: password}
      return this.http.post('http://localhost:3005/user/login', body).pipe(tap(token => {
        if(token[0].token){
          this.setSession(token[0].token,token[0].user)
        }
      }))
  }

  register(username:string, password:string ) {

    let body = { username : username, password: password}
    return this.http.post<userList[]>('http://localhost:3005/users', body)
}
        
  private setSession(authResult,user) {

      localStorage.setItem('id_token', authResult);
      localStorage.setItem('id_user', user._id);
      
  }          

  logout() {
      localStorage.removeItem("id_token");
      localStorage.removeItem("id_user");
      this.router.navigateByUrl('/');
  }

  public isLoggedIn() {
      return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
      return !this.isLoggedIn();
  }

  getToken(){
    return localStorage.getItem("id_token")
  }

  getIdCurrentUser(){
    return localStorage.getItem("id_user")
  }

  getUserList(){
    return this.http.get<userList[]>('http://localhost:3005/users')
  }

  public isAuth(): Observable<boolean> {
    let body = { token : this.getToken() }
    return this.http.post('http://localhost:3005/verifyToken', body).pipe(map(response => response[0].response));
  }

  getExpiration() {
      const expiration = localStorage.getItem("expires_at");
      const expiresAt = JSON.parse(expiration);
      return moment(expiresAt);
  }    
}
