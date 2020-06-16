import { FilmListStoreDetail } from 'src/app/interface/film-interface';
import { CommentActionTypes } from './action';
import { CommentStore } from 'src/app/interface/comment-interface';

const initialStateCatalog: CommentStore = {
    getListComment : {
      _id : '',
      comments: [{
        userId: '',
        message: '',
        dateCreated: '',
        username : ''
      }]
    }
};

export function commentReducer(state = initialStateCatalog, action){
    switch (action.type) {
        case CommentActionTypes.getListComment:
            // return updateDetailUserPayed(state, action.payload)
            return {
                ...state
            };
        // case CommentActionTypes.addComment:
        //   return {
        //       ...state,
        //       getListComment: {...state.getListComment, canDownload : action.payload}
        //   }
        case CommentActionTypes.InitializeCommentList:
        return {
            ...state,
            getListComment : action.payload
        };
        default:
            return state;
    }
}
