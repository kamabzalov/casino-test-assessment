import {
  getAllSuccess,
  getGamesByCategoryIdSuccess,
} from '@app/store/app.actions';
import { AppState } from '@app/store/state';
import { createReducer, on } from '@ngrx/store';

const initialState: AppState = {
  gamesList: [],
  gamesForCategory: [],
};

export const appReducer = createReducer(
  initialState,
  on(getAllSuccess, (state, action) => ({
    ...state,
    gamesList: action.games,
  })),
  on(getGamesByCategoryIdSuccess, (state, action) => ({
    ...state,
    gamesForCategory: action.gamesForCategory,
  }))
);
