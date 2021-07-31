import { Card } from "../app.component"
import * as CardActions from './cards.actions'

export interface CardsState {
  cards: Array<Card>
}

const initialState: CardsState = {
  cards: [
    { id: '1', title: 'Card 1', description: 'Card description 1' },
    { id: '2', title: 'Card 2', description: 'Card description 2' },
    { id: '3', title: 'Card 3', description: 'Card description 3' },
  ]
}

const newState = (state: any, newData: any) => {
  return Object.assign({}, state, newData)
}

export const cardReducer = (state = initialState, action: CardActions.All) => {
  console.log(action.type, state);
  
  switch (action.type) {
    case CardActions.DELETE_CARD:
      return newState(state, { cards: state.cards.filter(card => card.id !== action.id) })
    default:
      return state;
  }
}
