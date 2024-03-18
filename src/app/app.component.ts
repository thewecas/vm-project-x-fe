import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IconComponent } from './core/component/icon/icon.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    IconComponent,
    ButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'project-x';

  constructor() {
    document.documentElement.classList.add('dark');
  }
}
