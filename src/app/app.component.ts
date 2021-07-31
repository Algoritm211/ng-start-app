import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { CardsState } from './reducers/cards.reducer';
import { getCards } from './reducers/cards.selectors';

export interface Card {
  id: string
  title: string
  description: string
}

export interface AppState {
  cards: Array<Card>
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public cards$: Observable<Array<Card>> = this.store$.pipe(select(getCards))

  constructor(private store$: Store<CardsState>) {
  }

}
