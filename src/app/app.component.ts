import { Component } from '@angular/core';
import { ExpenseService } from './services/expense-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private expenseService: ExpenseService){
    this.expenseService.updateInitialAmount(2515)
  }
}
