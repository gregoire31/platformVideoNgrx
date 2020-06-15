import { FilmListStoreDetail, FilmDetail, FilmListStore, authorizationDownload } from 'src/app/interface/film-interface';
import { DetailActionTypes } from './action'

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
        case DetailActionTypes.addUserPayed:
            return addUserPayed(state, action.payload)
        case DetailActionTypes.InitializeDetailState:
        return {
            ...state,
            getListFilm : action.payload
        }
        default:
            return state;
    }
}


function addUserPayed(state : FilmListStoreDetail, payload : authorizationDownload){
    let newState = state.getListFilm.canDownload = payload
    //  newState = {
    //     ...state
    // }
    return newState

}