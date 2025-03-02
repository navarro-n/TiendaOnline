import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(
      private router: Router
    ) { }
    clickIniciarSesion(): void {
      this.router.navigate(['/app/control-panel']);
    }

}
