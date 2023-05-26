import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlFormComponent } from '../html-form/html-form.component';

@Component({
  selector: 'app-js-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './js-form.component.html',
  styleUrls: ['./js-form.component.scss']
})
export class JsFormComponent {

  @Input ()
  id!:string

  @Input()
  data!: {email: string, password: string, newsletter: boolean}
  //qua sarebbe meglio fare un interfaccia

  ngAfterViewInit() {
    let form = document.getElementById(this.id) as HTMLFormElement;

    (form.elements.namedItem("email") as any).value = this.data.email;
    (form.elements.namedItem("password") as any).value = this.data.password;
    (form.elements.namedItem("newsletter") as any).checked = this.data.newsletter;

  }

  submit(event: Event) {
    event.preventDefault()
    // Questo è per bloccare il reindirizzamento di default contenuto nell'input submit

    let form = document.getElementById("registration") as HTMLFormElement;

    // let email = (form.elements.namedItem("email") as any).value;
    // let password = (form.elements.namedItem("password") as any).value;
    // // let newsletter = (form.elements.namedItem("newsletter") as any).value; questo avrebbe value "chiappe" è meglio usare il checked
    // let newsletter = (form.elements.namedItem("newsletter") as any).checked;

    let formData = {
      email: (form.elements.namedItem("email") as any).value,
      password: (form.elements.namedItem("password") as any).value,
      newsletter: (form.elements.namedItem("newsletter") as any).checked
    };

    (form.elements.namedItem("email") as any).value = formData.email.toLowerCase()

    console.log(formData)

  }

}
