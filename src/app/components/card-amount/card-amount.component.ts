import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-amount',
  templateUrl: './card-amount.component.html',
  styleUrls: ['./card-amount.component.scss']
})
export class CardAmountComponent {
  @Input({required: true}) title: string = '';
  @Input({required: true}) description: string = '';
  @Input({required: true}) amount: number = 0;
}
