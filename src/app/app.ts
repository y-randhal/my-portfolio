import { Component, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styles: [],
})
export class App {
  protected readonly title = signal('Yuri Randhal Rodrigues Braga');
  protected readonly isDarkMode = signal(false);
  private platformId = inject(PLATFORM_ID);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('darkMode');
      this.isDarkMode.set(savedTheme === 'true');

      effect(() => {
        if (this.isDarkMode()) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      });
    }
  }

  protected toggleDarkMode() {
    if (isPlatformBrowser(this.platformId)) {
      this.isDarkMode.update(value => !value);
      localStorage.setItem('darkMode', this.isDarkMode().toString());
    }
  }
}
