import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";

import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseComponent } from "./expense/expense.component";
import { ExpenseFormComponent } from "./expense-form/expense-form.component";
import { CardAmountComponent } from './card-amount/card-amount.component';
import { ExpenseHeaderComponent } from './expense-header/expense-header.component';
import { ExpenseContainerComponent } from './expense-container/expense-container.component';
import { InvalidFormComponent } from "./invalid-form/invalid-form.component";

@NgModule({
    declarations: [
    ExpenseComponent,
    ExpenseListComponent,
    ExpenseFormComponent,
    CardAmountComponent,
    ExpenseHeaderComponent,
    ExpenseContainerComponent,
    InvalidFormComponent
  ],
    imports: [
      ReactiveFormsModule,
      FormsModule,
      CommonModule,
    ],
    exports: [
      ExpenseComponent,
      ExpenseListComponent,
      ExpenseFormComponent,
      CardAmountComponent,
      ExpenseHeaderComponent,
      ExpenseContainerComponent,
      InvalidFormComponent
    ],
    providers: [HttpClient]
})
export class ComponentsModule {}
