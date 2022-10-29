import { Injectable } from '@angular/core';
import { RestService } from '@app/services/rest/rest.service';
import { GET_All, GET_ALL_SUCCESS } from '@app/store/app.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';

@Injectable()
export class AppEffects {
  public loadGames$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GET_All),
      mergeMap(() =>
        this.restService.getAllCategories().pipe(
          map(res => ({
            type: GET_ALL_SUCCESS,
            games: res,
          }))
        )
      )
    );
  });

  constructor(private restService: RestService, private actions$: Actions) {}
}
