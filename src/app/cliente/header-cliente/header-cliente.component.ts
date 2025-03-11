import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-cliente',
  imports: [],
  standalone: true,
  templateUrl: './header-cliente.component.html',
  styleUrl: './header-cliente.component.scss'
})
export class HeaderClienteComponent {
  constructor(
    private router: Router
  ) { }

  clickIniciarSesion(): void {
    this.router.navigate(['/login']);
  }

  clickRegistrarse(): void {
    this.router.navigate(['/registro']);
  }

  clickTienda(): void {
    this.router.navigate(['/tienda']);
  }

}
