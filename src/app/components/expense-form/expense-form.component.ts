import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IExpense } from '../expense/expense.interface';
import { ExpenseService } from 'src/app/services/expense-service.service';
import { EExpenseType } from './expense-type.enum';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.scss']
})
export class ExpenseFormComponent implements OnInit {
  @Output() expenseEmitt: EventEmitter<IExpense> = new EventEmitter<IExpense>()
  protected expense: IExpense = {} as IExpense;
  protected expenseType = [EExpenseType.gas, EExpenseType.internet, EExpenseType.luz, EExpenseType.outros];

  protected expenseFormGroup: FormGroup = new FormGroup({
    description: new FormControl('', Validators.required),
    cost: new FormControl('', Validators.required),
    dueDate: new FormControl('', Validators.required),
    expenseType: new FormControl('Luz', Validators.required),
  });
  private ISVALID: boolean = this.expenseFormGroup.valid;


  constructor(private expenseService: ExpenseService) { }

  ngOnInit() {
  }

  saveExpense(){
    if(this.ISVALID){
      this.expenseFormGroup.valueChanges.subscribe((expenseSubmited)=>{
        this.expense = {
          description: expenseSubmited.description,
          cost: expenseSubmited.cost,
          dueDate: expenseSubmited.dueDate,
          expenseType: expenseSubmited.expenseType
        }
      })
      this.expenseService.createNewExpense(this.expense);
      this.expenseEmitt.emit(this.expense);

    }
    this.expenseFormGroup.reset();
  }
}
