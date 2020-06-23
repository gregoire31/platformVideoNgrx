import { FilmListStore } from 'src/app/interface/film-interface';
import { CatalogActionTypes } from './action';

export const initialStateCatalog: FilmListStore = {
    isFetching : false,
    getListFilm : [{
        _id: '',
        description: '',
        image : '',
        prix: '',
        title: '',
    }]
};

export function catalogReducer(state = initialStateCatalog, action){
    switch (action.type) {
        case CatalogActionTypes.ListCatalogs:
            const catalogList = {
                ...state
            };
            return catalogList;
        case CatalogActionTypes.InitializeCatalogsState:
        return {
            ...state,
            getListFilm : [...action.payload]
        };
        default:
            return state;
    }
}
