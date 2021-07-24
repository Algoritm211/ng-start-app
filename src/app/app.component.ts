import { Component } from '@angular/core';

export interface Card {
  title: string
  description: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cards: Array<Card> = [
    { title: 'Card 1', description: 'Card description 1' },
    { title: 'Card 2', description: 'Card description 2' },
    { title: 'Card 3', description: 'Card description 3' },
  ]
}
