import { IExpense } from './../expense/expense.interface';
import { Component, OnInit, } from '@angular/core';
import { ExpenseService } from 'src/app/services/expense-service.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent implements OnInit {
  protected totalExpensesAmount: number = 0;
  protected expenseList: IExpense[] = [];

  constructor(private expenseService: ExpenseService){
    expenseService.expenseList$.subscribe((expenseList: IExpense[])=>{
      this.expenseList = expenseList;
    })
  }

  ngOnInit(): void {
  }

  // public updateExpenseList($event: IExpense){
  //   this.expenseList.push($event);
  //   this.expense = {} as IExpense;

  //   this.totalExpensesAmount = this.reduceExpensesValues(this.expenseList);

  //   const subtractedValue = this.initialValue - this.totalExpensesAmount;

  //   this.updateBalanceValues(subtractedValue);
  // }

  // public reduceExpensesValues(expenseList: IExpense[]): number {
  //   return expenseList.reduce((accumulator: number, expense: IExpense) => {
  //     return expense.value !== null ? accumulator + expense.value : accumulator;
  //   }, 0);
  // }

  // private updateBalanceValues(actualBalance: number){
  //   this.newValue = actualBalance;
  // }

}
