import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidFormComponent } from './invalid-form.component';

describe('InvalidFormComponent', () => {
  let component: InvalidFormComponent;
  let fixture: ComponentFixture<InvalidFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvalidFormComponent]
    });
    fixture = TestBed.createComponent(InvalidFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
