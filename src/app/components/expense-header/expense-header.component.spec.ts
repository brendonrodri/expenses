import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseHeaderComponent } from './expense-header.component';

describe('ExpenseHeaderComponent', () => {
  let component: ExpenseHeaderComponent;
  let fixture: ComponentFixture<ExpenseHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpenseHeaderComponent]
    });
    fixture = TestBed.createComponent(ExpenseHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
