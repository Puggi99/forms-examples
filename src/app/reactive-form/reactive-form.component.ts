import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {

  @Input()
  data = { email: "email di default", password: "password di default", newsletter: false }

  formGroup = new FormGroup({
    //dentro a questo oggetto vado a mettere i nomi degli input
    email: new FormControl(this.data.email, Validators.required), //come parametro gli passo i valori di default, le condizioni invece con la classe Validator, importata da @angular/forms
    password: new FormControl(this.data.password, [Validators.required, Validators.minLength(3)]), //validators multipli vanno messi in un array
    newsletter: new FormControl(this.data.newsletter)
  })

  ngOnInit() {
    this.formGroup.valueChanges.subscribe((val) => console.log(val))
    //posso usarli come observables
  }

  get email() {
    return this.formGroup.get('email') as FormControl
  }

  get password() {
    return this.formGroup.get('password') as FormControl
  }

  submit() {
    console.log(this.data)
  }
}
