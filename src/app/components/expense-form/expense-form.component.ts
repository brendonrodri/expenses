import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IExpense } from '../expense/expense.interface';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.scss']
})
export class ExpenseFormComponent implements OnInit {
  @Output() expenseEmitt: EventEmitter<IExpense> = new EventEmitter<IExpense>()
  protected expense: IExpense = {} as IExpense;


  constructor() { }

  ngOnInit() {
  }

  saveExpense(expense: IExpense){
    this.expenseEmitt.emit(expense)
    console.log(expense)
    this.expense = {} as IExpense;
  }
}
