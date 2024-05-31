import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  // templateUrl: './app.component.html',
  // styleUrl: './app.component.css',
  template: `
    <main>
      <header class="brand-name">
        <img
          class="brand-logo"
          src="/house.svg"
          alt="logo"
          aria-hidden="true"
          width="20"
          height="20"
        />
      </header>
      <section class="content">
        <app-home></app-home>
      </section>
    </main>
  `,
})
export class AppComponent {
  title = 'a1';
  hoverColorVar = '#999999';
  primaryColor = '#777777';
}
