import { FilmListStoreDetail } from 'src/app/interface/film-interface';
import { DetailActionTypes } from './action';

const initialStateCatalog: FilmListStoreDetail = {
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

export function detailReducer(state = initialStateCatalog, action){
    switch (action.type) {
        case DetailActionTypes.updateDetailUserPayed:
            // return updateDetailUserPayed(state, action.payload)
            return {
                ...state,
                getListFilm: {...state.getListFilm, canDownload : action.payload}
            }
        case DetailActionTypes.InitializeDetailState:
        return {
            ...state,
            getListFilm : action.payload
        }
        default:
            return state;
    }
};