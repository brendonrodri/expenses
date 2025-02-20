import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IExpense } from '../expense/expense.interface';
import { ExpenseService } from 'src/app/services/expense-service.service';
import { EExpenseType } from './expense-type.enum';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.scss']
})
export class ExpenseFormComponent {
  @Output() expenseEmitt: EventEmitter<IExpense> = new EventEmitter<IExpense>()
  protected expenseFormGroup: FormGroup = new FormGroup({
    description: new FormControl('', Validators.required),
    cost: new FormControl('', Validators.required),
    dueDate: new FormControl('', Validators.required),
    expenseType: new FormControl('', Validators.required),
  });


  protected expenseType = [EExpenseType.gas, EExpenseType.internet, EExpenseType.luz, EExpenseType.outros];
  private formIsValid!: boolean;

  constructor(private expenseService: ExpenseService, private apiService: ApiService) { }

  protected isDateInformed(controlName: string){
    return this.expenseFormGroup.controls[controlName].errors &&
          this.expenseFormGroup.controls[controlName].touched
  }

  saveExpense(){
   this.formIsValid = this.expenseFormGroup.valid;
    if(this.formIsValid){
      const expense = this.expenseFormGroup.value;
      this.expenseService.createNewExpense(expense);
      this.apiService.sendApi(this.expenseService.expenseListParsed);
    }

    this.expenseFormGroup.reset();

  }




}
