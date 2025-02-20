import { Component } from '@angular/core';
import { ExpenseService } from './services/expense-service.service';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private expenseService: ExpenseService, private apiService: ApiService){
    this.expenseService.updateInitialAmount(2515);
    this.apiService.getExpenses();
  }
}
