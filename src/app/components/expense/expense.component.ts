import { Component, Input, OnInit } from '@angular/core';
import { IExpense } from './expense.interface';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent{

  @Input() expense: IExpense = { } as IExpense;

}
