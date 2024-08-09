import { Component } from '@angular/core';
import { from, fromEvent, of } from 'rxjs';

@Component({
  selector: 'app-a8',
  standalone: true,
  imports: [],
  templateUrl: './a8.component.html',
  styleUrl: './a8.component.scss'
})

// Criando Observables a partir de uma informação em javascript
export class A8Component {
  constructor () {
    const users = [
      { id: 1, name: 'Mauricio', age: 24 },
      { id: 2, name: 'Beserra', age: 28 },
      { id: 3, name: 'Wensch', age: 26 },
    ]

    const messagePromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('Promised resolve')
      }, 1000)
    })

    // Transformando Array em um Observables.
    // Não usar o `of` para Promises por que não vai retorna o valor resolvido
    const users$ = of(users)

    // Transformando Promise em um Observables usando o `from`, sempre usar ele para Promises
    const message$ = from(messagePromise)

    // Exemplo de transformar um evento DOM para um Observable
    const bodyClick$ = fromEvent(document, 'click')

    users$.subscribe((users) => console.log('users', users))
    message$.subscribe((message) => console.log('message', message))
    bodyClick$.subscribe((event) => console.log('event', event))
  }
}
