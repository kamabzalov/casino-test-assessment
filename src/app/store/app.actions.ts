import { Game } from '@app/store/state';
import { createAction, props } from '@ngrx/store';

export const GET_All = '[Games Categories Page] Get All';
export const GET_ALL_SUCCESS = '[Games Categories Page] Get All Success';
export const GET_GAMES_BY_ID = '[Game Category Page] Get Games By Category ID';
export const GET_GAMES_BY_ID_SUCCESS =
  '[Game Category Page] Get Games By Category ID Success';

export const getAll = createAction(GET_All);

export const getAllSuccess = createAction(
  GET_ALL_SUCCESS,
  props<{ games: Game[] }>()
);

export const getGamesByCategoryId = createAction(
  GET_GAMES_BY_ID,
  props<{ categoryId: string }>()
);

export const getGamesByCategoryIdSuccess = createAction(
  GET_GAMES_BY_ID_SUCCESS,
  props<{ gamesForCategory: Game[] }>()
);
