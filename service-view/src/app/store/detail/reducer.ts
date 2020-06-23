import { FilmListStoreDetail } from 'src/app/interface/film-interface';
import { DetailActionTypes } from './action';

export const initialStateDetail: FilmListStoreDetail = {
    isFetching: false,
    getListFilm : {
        _id: '',
        description: '',
        image : '',
        prix: '',
        title: '',
        usersPayed : [],
        canDownload: {
            date : '',
            hasPayed : false
        }
    }
}

export function detailFilmReducer(state = initialStateDetail, action){
    switch (action.type) {
        case DetailActionTypes.updateDetailUserPayedType:
            // return updateDetailUserPayed(state, action.payload)
            return {
                ...state,
                getListFilm: {...state.getListFilm, canDownload : action.payload}
            }
        case DetailActionTypes.InitializeDetailStateType:
        return {
            ...state,
            getListFilm : action.payload
        }
        default:
            return state;
    }
};