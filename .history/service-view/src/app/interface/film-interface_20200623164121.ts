export interface Film {
    description: string;
    image: string;
    prix: string;
    title: string;
    // usersPayed : Array<userPay>,
    _id: string;
    // canDownload: authorizationDownload
  }
export interface FilmDetail {
    description: string;
    image: string;
    prix: string;
    title: string;
    usersPayed: Array<userPay>;
    _id: string;
    canDownload?: authorizationDownload;
  }
export interface authorizationDownload {
      hasPayed: boolean;
      date: string;
  }

export interface userPay{
      userId: string;
      dateCreated: string;
      date: string;
  }
export interface timeLeft{
      hour: number;
      minute: number;
  }

export interface FilmListStore {
    isFetching: boolean;
    getListFilm: Film[];
  }

export interface FilmListStoreDetail {
    isFetching: boolean;
    getListFilm: FilmDetail;
}