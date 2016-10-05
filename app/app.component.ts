import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
      <app-title [subtitle]="subtitle"></app-title>
      <nav>
        <a routerLink="contact" routerLinkActive="active">Contact</a>
        <a routerLink="dashboard" routerLinkActive="active">Dashboard</a>
        <a routerLink="heroes" routerLinkActive="active">Heroes</a>
      </nav>
      <router-outlet></router-outlet>
    `,

    styleUrls: ['app/app.component.css'],

})
export class AppComponent {
    subtitle = '(v3)';
}
