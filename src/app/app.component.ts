import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  name = 'Angular';
  a = true;
  b = false;
  c = true;

  constructor() {
    setInterval(() => {
      console.log("flags: ", this.a, this.b, this.c);
      this.c = !this.c;
    }, 5 * 1000);
  }
}
