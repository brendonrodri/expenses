import { Injectable, OnInit } from '@angular/core';
import { IExpense } from '../components/expense/expense.interface';
import { ExpenseService } from './expense-service.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService{
  constructor(private expenseService: ExpenseService) {}


  async sendApi(expense: IExpense[]): Promise<any> {
    try {
      const response = await fetch('http://localhost:3000/save-expense', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(expense)
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();

      return data;
    } catch (error) {
      console.error('Erro na requisição:', error);
      throw error;
    }
  }

  async getExpenses(): Promise<IExpense[]> {
    try {
      const response = await fetch('http://localhost:3000/get-expense', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });

      if (!response.ok) {
        throw new Error(`Erro ao buscar despesas: ${response.statusText}`);
      }

      const data: IExpense[] = await response.json();
      this.updateExpenseList(data);
      return data;
    } catch (error) {
      console.error('Erro ao buscar despesas:', error);
      return [];
    }
  }

  private updateExpenseList(expenseList: IExpense[]){
    this.expenseService.updateExpenseList(expenseList);
  }
}
