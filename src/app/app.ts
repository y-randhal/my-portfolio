import { Component, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

const DEVICONS = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styles: [],
})
export class App {
  protected readonly title = signal('Yuri Randhal Rodrigues Braga');
  protected readonly isDarkMode = signal(false);
  protected readonly currentYear = signal(new Date().getFullYear());
  protected readonly cvUrl = 'assets/docs/CV - Yuri Randhal Rodrigues Braga - Software Engineer.pdf'
  protected readonly skills = [
    { title: 'Angular', link: 'https://angular.dev', icon: `${DEVICONS}/angular/angular-original.svg` },
    { title: 'React', link: 'https://react.dev', icon: `${DEVICONS}/react/react-original.svg` },
    { title: 'Next.js', link: 'https://nextjs.org', icon: `${DEVICONS}/nextjs/nextjs-original.svg` },
    { title: 'RxJS', link: 'https://rxjs.dev', icon: `${DEVICONS}/rxjs/rxjs-original.svg` },
    { title: 'TypeScript', link: 'https://www.typescriptlang.org', icon: `${DEVICONS}/typescript/typescript-original.svg` },
    { title: 'Tailwind CSS', link: 'https://tailwindcss.com', icon: `${DEVICONS}/tailwindcss/tailwindcss-original.svg` },
    { title: 'Ionic', link: 'https://ionicframework.com', icon: `${DEVICONS}/ionic/ionic-original.svg` },
    { title: 'Node.js', link: 'https://nodejs.org', icon: `${DEVICONS}/nodejs/nodejs-original.svg` },
    { title: 'NestJS', link: 'https://nestjs.org', icon: `${DEVICONS}/nestjs/nestjs-original.svg` },
    { title: 'PHP', link: 'https://www.php.net', icon: `${DEVICONS}/php/php-original.svg` },
    { title: 'Python', link: 'https://www.python.org', icon: `${DEVICONS}/python/python-original.svg` },
    { title: 'Git', link: 'https://git-scm.com', icon: `${DEVICONS}/git/git-original.svg` },
    { title: 'LLM', link: 'https://en.wikipedia.org/wiki/Large_language_model', icon: 'llm' },
    { title: 'Generative AI', link: 'https://en.wikipedia.org/wiki/Generative_artificial_intelligence', icon: 'genai' },
    { title: 'AI Prompting', link: 'https://www.promptingguide.ai', icon: 'prompting' },
  ];
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
