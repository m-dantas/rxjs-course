import { Component } from '@angular/core';
import { from } from 'rxjs';
import { CustomObserver } from './custom-observer';

@Component({
  selector: 'app-a12',
  standalone: true,
  imports: [],
  templateUrl: './a12.component.html',
  styleUrl: './a12.component.scss'
})
export class A12Component {
  constructor () {
    console.log(1)
    const number$ = from([1,2,3,4,5])

    number$.subscribe(new CustomObserver())
    console.log(2)
  }
}
