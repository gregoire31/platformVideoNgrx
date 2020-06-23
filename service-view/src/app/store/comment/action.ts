import { Action } from '@ngrx/store';
import {  FilmDetail, authorizationDownload } from 'src/app/interface/film-interface';
import { CommentStore, Comment } from 'src/app/interface/comment-interface';

export enum CommentActionTypes {
    getListComment = '[Comment] get',
    InitializeCommentList = '[Comment] initialize',
    addComment = '[Comment] add comment',
}
export class ListComment implements Action {
    type = CommentActionTypes.getListComment;
    constructor(public payload: string){}
}

export class InitializeCommentList implements Action {
    type = CommentActionTypes.InitializeCommentList;
    constructor(public payload: CommentStore){}
}

export class AddComment implements Action {
    type = CommentActionTypes.addComment;
    constructor(public payload: Comment){}
}

