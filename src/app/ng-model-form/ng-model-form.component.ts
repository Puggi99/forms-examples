import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-model-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ng-model-form.component.html',
  styleUrls: ['./ng-model-form.component.scss']
})
export class NgModelFormComponent {
  @Input()
  data!: {email: string, password: string, newsletter: boolean}
  //qua sarebbe meglio fare un interfaccia

  submitForm() {
    console.log(this.data)
    };

  }

