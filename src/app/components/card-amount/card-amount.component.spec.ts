import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAmountComponent } from './card-amount.component';

describe('CardAmountComponent', () => {
  let component: CardAmountComponent;
  let fixture: ComponentFixture<CardAmountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardAmountComponent]
    });
    fixture = TestBed.createComponent(CardAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
