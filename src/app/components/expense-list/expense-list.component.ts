import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IExpense } from '../expense/expense.interface';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent implements OnInit {
  @Input() initialValue: number = 2515;
  @Input() newValue: number = 0;

  protected totalExpensesAmount: number = 0;
  protected expenseList: IExpense[] = [];
  public expense: IExpense = {} as IExpense;

  ngOnInit(): void {
    this.newValue = this.initialValue;
  }

  public updateExpenseList($event: IExpense){
    this.expenseList.push($event);
    this.expense = {} as IExpense;

    this.totalExpensesAmount = this.reduceExpensesValues(this.expenseList);

    const subtractedValue = this.initialValue - this.totalExpensesAmount;

    this.updateBalanceValues(subtractedValue);
  }

  public reduceExpensesValues(expenseList: IExpense[]): number {
    return expenseList.reduce((accumulator: number, expense: IExpense) => {
      return expense.value !== null ? accumulator + expense.value : accumulator;
    }, 0);
  }

  private updateBalanceValues(actualBalance: number){
    this.newValue = actualBalance;
  }

}
