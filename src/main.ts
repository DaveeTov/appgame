import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';  // 👈 nombre real de la clase
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {               // 👈 usar AppComponent aquí
  providers: [
    provideRouter(routes),
    provideAnimations() // necesario para PrimeNG
  ]
}).catch(err => console.error(err));
