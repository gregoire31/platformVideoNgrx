import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comments } from '../interface/comment-interface';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private httpClient: HttpClient) { }

  getCommentList(id:String){
    return this.httpClient
    .get<Comments>(`http://localhost:3000/comment/${id}`)
  }

  addComment(idFilm:string,idUser:string,message:string,dateCreated:string){

    let body = {
      idFilm,
      idUser,
      message,
      dateCreated
    }
    return this.httpClient.post<Comments>('http://localhost:3000/comment', body)
  }

}
