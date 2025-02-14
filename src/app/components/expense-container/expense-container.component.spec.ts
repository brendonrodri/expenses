import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseContainerComponent } from './expense-container.component';

describe('ExpenseContainerComponent', () => {
  let component: ExpenseContainerComponent;
  let fixture: ComponentFixture<ExpenseContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpenseContainerComponent]
    });
    fixture = TestBed.createComponent(ExpenseContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
