import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-invalid-form',
  templateUrl: './invalid-form.component.html',
  styleUrls: ['./invalid-form.component.scss']
})
export class InvalidFormComponent {
  @Input({required: true}) errorMessage: string = '';
}
