import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IExpense } from '../expense/expense.interface';
import { ExpenseService } from 'src/app/services/expense-service.service';
import { EExpenseType } from './expense-type.enum';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.scss']
})
export class ExpenseFormComponent implements OnInit {
  @Output() expenseEmitt: EventEmitter<IExpense> = new EventEmitter<IExpense>()
  protected expense: IExpense = {} as IExpense;
  protected expenseType = [EExpenseType.gas, EExpenseType.internet, EExpenseType.luz, EExpenseType.outros]


  constructor(private expenseService: ExpenseService) { }

  ngOnInit() {
  }

  saveExpense(){
    this.expenseEmitt.emit(this.expense);
    this.expenseService.createNewExpense(this.expense);
    this.expense = {} as IExpense;
  }
}
