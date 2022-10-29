import { Game } from '@app/store/state';
import { createAction, props } from '@ngrx/store';

export const GET_All = '[Games Categories] Get All';
export const GET_ALL_SUCCESS = '[Games Categories] Get All Success';

export const getAll = createAction(GET_All);

export const getAllSuccess = createAction(
  GET_ALL_SUCCESS,
  props<{ games: Game[] }>()
);
