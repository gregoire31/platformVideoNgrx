
import { CommentActionTypes } from './action';
import { CommentStore } from 'src/app/interface/comment-interface';
import { getListComment } from './selector';

export const initialStateComment: CommentStore = {
    isFetching: false,
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

export function commentReducer(state = initialStateComment, action){
    switch (action.type) {
        case CommentActionTypes.getListComment:
            return {
                ...state
            };
        case CommentActionTypes.InitializeCommentList:
        return {
            ...state,
            isFetching : action.payload.isFetching,
            getListComment : action.payload.getListComment
        };
        case CommentActionTypes.addComment:
            return {
                ...state,
                getListComment : {...state.getListComment, comments : [...state.getListComment.comments, action.payload] }
            };
        default:
            return state;
    }
}
