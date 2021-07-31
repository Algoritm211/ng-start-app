import {
  ActionReducerMap
} from '@ngrx/store'
import { cardReducer, CardsState } from './cards.reducer';
import * as CardsActions from './cards.actions'

export interface State {
  cards: CardsState;
}

export const reducers: ActionReducerMap<State, CardsActions.All> = {
  cards: cardReducer
}
