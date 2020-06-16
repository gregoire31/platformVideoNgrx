// import { Actions, Effect, ofType } from '@ngrx/effects';
// import { Observable, of } from 'rxjs';
// import { catchError, map, switchMap } from 'rxjs/operators';
// import * as detailAction from './action';
// import { Injectable } from '@angular/core';
// import { DetailService } from 'src/app/service/detail.service';

// @Injectable()
// export class DetailEffects {


//   login$ = this.actions$.pipe(
//     ofType(<detailAction.initialiseStateDetail>(detailAction.InitializeDetailStateType),
//     switchMap)
//   )
//   constructor(
//     private actions$: Actions,
//     private detailService: DetailService
//   ) {}

//   // @Effect()
//   // fetchEndpointDetails$ = this.actions$.pipe(
//   //   ofType<any>(detailAction.initialiseStateDetail),
//   //   switchMap(action =>
//   //     this.endpointsService.getDetailsEndpoint(action.payload.id).pipe(
//   //       map(
//   //         res =>
//   //           new Endpoints.FetchDetailsSuccess({
//   //             id: action.payload.id,
//   //             data: res,
//   //           })
//   //       ),
//   //       catchError((err: HttpErrorResponse) => {
//   //         if (environment.debug) {
//   //           console.group();
//   //           console.warn(
//   //             'Error caught in endpoints.effects: ofType(Endpoints.FetchDetails)'
//   //           );
//   //           console.error(err);
//   //           console.groupEnd();
//   //         }

//   //         return of(new Endpoints.FetchDetailsError(action.payload));
//   //       })
//   //     )
//   //   )
//   // );
// }