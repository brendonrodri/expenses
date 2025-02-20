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

  }

  ngOnInit(): void {
    this.expenseService.expenseList$.subscribe((expenseList: IExpense[])=>{
      this.expenseList = expenseList;
    })
  }



}
