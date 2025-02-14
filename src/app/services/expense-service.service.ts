import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IExpense } from '../components/expense/expense.interface';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private initialAmount: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public initialAmount$: Observable<number> = this.initialAmount.asObservable();
  public updateInitialAmount(newValue: number): void{
    this.initialAmount.next(newValue);
  }

  private economies: BehaviorSubject<number> = new BehaviorSubject<number>(this.initialAmount.value);
  public economies$: Observable<number> = this.economies.asObservable();
  public updateEconomies(newValue: number): void{
    this.economies.next(newValue);
  }

  private totalExpenses: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public totalExpenses$: Observable<number> = this.totalExpenses.asObservable();
  public updateTotalExpenses(newValue: number): void{
    this.totalExpenses.next(newValue);
  }

  private expenseList: BehaviorSubject<IExpense[]> = new BehaviorSubject<IExpense[]>([]);
  public expenseList$: Observable<IExpense[]> = this.expenseList.asObservable();
  get expenseListParsed(): IExpense[]{
    let newList: IExpense[] = [];
    const oldList = this.expenseList$.subscribe((item)=>{
      newList = item;
    })
    return newList;
  }

  public updateExpenseList(expenseList: IExpense[]): void{
    this.expenseList.next(expenseList);
  }

  public createNewExpense(expense: IExpense){
    const expenseList = this.expenseListParsed.concat(expense);

    this.updateExpenseList(expenseList);

  }
}
