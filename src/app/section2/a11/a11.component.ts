import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-a11',
  standalone: true,
  imports: [],
  templateUrl: './a11.component.html',
  styleUrl: './a11.component.scss'
})
export class A11Component {
  constructor () {
    const users = [
      { id: 1, name: 'Mauricio', age: 24 },
      { id: 2, name: 'Beserra', age: 28 },
      { id: 3, name: 'Wensch', age: 26 },
    ]

    // Como criar seus próprios observables de forma customizada 
    const users$ = new Observable(observer => {
      // Exemplo deu um `of` que retorna uma vez o valor inteiro
      observer.next(users)
     
      // Exemplo de como funciona o `from` que pra cada item, emit uma vez
      users.forEach(user => observer.next(user))
      
      // Exemplo de dar complete
      observer.complete()
    })

    users$.subscribe({
      next: users => console.log('users', users),
      complete: () => {
        console.log('Completed')
      }
    })
  }
}
