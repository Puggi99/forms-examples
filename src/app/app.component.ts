import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'forms-examples';

  formData = {
    email: "caccopazzo@giga.it",
    password: "finchèfaccio",
    newsletter: false
  }

  formData2 = {
    email: "caccooooooo2@giga.it",
    password: "finchèfaccio",
    newsletter: true
  }
}
