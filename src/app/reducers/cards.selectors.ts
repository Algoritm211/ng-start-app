import { createFeatureSelector, createSelector } from '@ngrx/store'
import { CardsState } from './cards.reducer';


export const selectCardsFeature = createFeatureSelector<CardsState>('cards')

export const getCards = createSelector(
  selectCardsFeature,
  (state: CardsState) => state.cards
);
