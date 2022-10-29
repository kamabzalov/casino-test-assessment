import { AppState } from '@app/store/state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectAppState = createFeatureSelector<AppState>('app');

export const selectGamesList = createSelector(
  selectAppState,
  state => state.gamesList
);

export const selectGamesForCategory = createSelector(
  selectAppState,
  state => state.gamesForCategory
);
