import { Injectable } from '@angular/core';
import { RestService } from '@app/services/rest/rest.service';
import {
  GET_ALL_SUCCESS,
  GET_GAMES_BY_ID_SUCCESS,
  getAll,
  getGamesByCategoryId,
} from '@app/store/app.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, mergeMap } from 'rxjs';

@Injectable()
export class AppEffects {
  public loadGames$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getAll),
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

  public loadGamesByCategoryId$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getGamesByCategoryId),
      exhaustMap(action =>
        this.restService.getGamesByCategory(action.categoryId).pipe(
          map(res => ({
            type: GET_GAMES_BY_ID_SUCCESS,
            gamesForCategory: res,
          }))
        )
      )
    );
  });

  constructor(private restService: RestService, private actions$: Actions) {}
}
