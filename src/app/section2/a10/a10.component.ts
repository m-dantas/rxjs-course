import { Component } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-a10',
  standalone: true,
  imports: [],
  templateUrl: './a10.component.html',
  styleUrl: './a10.component.scss'
})
export class A10Component {
  constructor () {
    const messagePromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        // resolve('Promised resolve')
        reject('Promised reject')
      }, 1000)
    })

    const message$ = from(messagePromise)

    // Outra forma de lidar com subscriber
    message$.subscribe({
      // next é quando der sucesso
      next: (message) => {
        console.log('message', message)
      },
      // `error` -> lidar com as exceções
      error: (error) => {
        console.error('error', error)
      },
      // Complete basicamente é quando uma Stream é finalizada, por default nunca é finalizada, então esse bloco acabar por não entrar.
      complete: () => {
        console.log('It is done')
      }
    })
  }
}
