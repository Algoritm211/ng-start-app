import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card!: Card;
  functionalNotAvaible = () => alert('Functionality will implemented in future')

  constructor() { }

  ngOnInit(): void {

  }

}
