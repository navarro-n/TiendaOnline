import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  imports: [],
  standalone: true,
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent {
  constructor(
    private router: Router
  ) { }
  clickIniciarSesion(): void {
    this.router.navigate(['/app/control-panel']);
  }

}
