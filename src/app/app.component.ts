import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { A7Component } from "./section2/a7/a7.component";
import { A8Component } from "./section2/a8/a8.component";
import { A10Component } from "./section2/a10/a10.component";
import { A11Component } from "./section2/a11/a11.component";
import { A12Component } from "./section2/a12/a12.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    A7Component,
    A8Component,
    A10Component,
    A11Component,
    A12Component
],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'rxjs-course';
}
