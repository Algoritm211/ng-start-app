import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, Card } from '../app.component';
import * as CardActions from '../reducers/cards.actions'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card!: Card;
  functionalNotAvaible = () => alert('Functionality will implemented in future')

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

  }

  delete(id: string) {
    this.store.dispatch(new CardActions.DeleteCard(id))
  }
}
