import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private initialAmount: BehaviorSubject<number> = new BehaviorSubject(0);
  public initialAmount$: Observable<number> = this.initialAmount.asObservable();
  public updateInitialAmount(newValue: number): void{
    this.initialAmount.next(newValue);
  }

  private economies: BehaviorSubject<number> = new BehaviorSubject(this.initialAmount.value);
  public economies$: Observable<number> = this.economies.asObservable();
  public updateEconomies(newValue: number): void{
    this.economies.next(newValue);
  }

  private totalExpenses: BehaviorSubject<number> = new BehaviorSubject(0);
  public totalExpenses$: Observable<number> = this.totalExpenses.asObservable();
  public updateTotalExpenses(newValue: number): void{
    this.totalExpenses.next(newValue);
  }

}
