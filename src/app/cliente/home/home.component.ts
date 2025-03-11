import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  productos = [
    { name: 'IPhone 16', image: '/telefono1.jpg' },
    { name: 'IPhone 16', image: '/telefono2.jpg' },
    { name: 'IPhone 16', image: '/telefono3.jpg' },
    { name: 'IPhone 16', image: '/telefono4.jpg' },
    { name: 'IPhone 16', image: '/telefono5.jpg' },
    { name: 'IPhone 16', image: '/telefono6.jpg' }
  ];

  categorias = [
    { name: 'Moviles', image: '/movil.jpg' },
    { name: 'Ordenadores', image: '/ordenador.jpg' },
    { name: 'Tablets', image: '/tablet.jpg' },
    { name: 'Altavoces', image: '/altavoces.jpg' }
  ];

  clickProducto(url: any) {
    window.location.href = url;
  }

  clickCategorias(url: any) {
    window.location.href = url;
  }
}
