import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header [appName]="title"></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'Escola AgoraVai!';
}
