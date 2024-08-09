import { Component } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-a7',
  standalone: true,
  imports: [],
  templateUrl: './a7.component.html',
  styleUrl: './a7.component.scss'
})
export class A7Component {
  data: number = 0;
  constructor () {
    // Ao usar Observables é recomendado usar cifrã no final da variavel - ex: number$
    // of -> lista um observable completo
    // from -> lista item por item
    const number$ = of([1,2,3,4,5])
    const number2$ = from([1,2,3,4,5])

    number$.subscribe((data) => {
      console.log('subscriber', data)
    })

    number2$.subscribe((data) => {
      console.log('subscribe 2', data)
      this.data = data
    })
  }
}
