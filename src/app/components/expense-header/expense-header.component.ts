import { Component } from '@angular/core';
import { ExpenseService } from 'src/app/services/expense-service.service';

@Component({
  selector: 'app-expense-header',
  templateUrl: './expense-header.component.html',
  styleUrls: ['./expense-header.component.scss']
})
export class ExpenseHeaderComponent {
  protected initialAmount: number = 0;
  protected economies: number = 0;
  protected totalExpenses: number = 0;

  constructor(protected expenseService: ExpenseService){
    expenseService.initialAmount$.subscribe(amount => this.initialAmount = amount);
    expenseService.economies$.subscribe(economie => this.economies = economie);
    expenseService.totalExpenses$.subscribe(expenses => this.totalExpenses = expenses);
  }
}
