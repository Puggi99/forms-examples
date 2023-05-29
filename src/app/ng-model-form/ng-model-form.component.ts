import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-angular-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ng-model-form.component.html',
  styleUrls: ['./ng-model-form.component.scss']
})
export class NgModelFormComponent {

  @Input()
  data = { email: "email di default", password: "password di default", newsletter: false }
  //questo viene sovrascritto dal binding di app.component.html, che prende i valori dall'oggetto in app.component.ts
  //qua sarebbe meglio fare un interfaccia

  submit() {
    console.log(this.data)
  }
}
