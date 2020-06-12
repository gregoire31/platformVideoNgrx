import { FilmListStore } from 'src/app/interface/film-interface';
import { UserActionTypes } from './action'

const initialStateCatalog: FilmListStore = {
    getListFilm : [{
        _id: '',
        description: '',
        image : '',
        prix: '',
        title: '',
    }]
}

export function catalogReducer(state = initialStateCatalog, action){
    switch (action.type) {
        case UserActionTypes.ListCatalogs:
            const catalogList = {
                ...state
            };
        console.log(catalogList);
        return catalogList;
        case UserActionTypes.InitializeCatalogsState:
        return {
            ...state,
            getListFilm : [...action.payload]
        }
        default:
            return state;
    }
}