import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(private httpClient: HttpClient) { }

  acceptUserPaiement(idFilm:string,idUser:string,dateCreated:string){

    let body = {
      idFilm,
      idUser,
      dateCreated
    }
    return this.httpClient.post<any>(`http://localhost:3003/addFilmPayedUser`,body)
  }
}
