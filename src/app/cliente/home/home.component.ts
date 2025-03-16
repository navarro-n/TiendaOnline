import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { PopupService } from '../../services/utils/popup.service';

export interface Producto {
  id: number;
  nombre: string;
  imagen: string;
  descripcion: string;
  precio: number;
  categoria: string;
}
@Component({
  selector: 'app-home',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  productos: Producto[] = [
    { id: 8, nombre: 'MacBook Pro', imagen: '/mac.jpg', descripcion: 'Potente portátil de Apple', precio: 2500, categoria: 'Ordenadores' },
    { id: 1, nombre: 'iPhone 15', imagen: '/telefono1.jpg', descripcion: 'Última generación de Apple', precio: 1200, categoria: 'Móviles' },
    { id: 2, nombre: 'iPhone 16', imagen: '/telefono1.jpg', descripcion: 'Última generación de Apple', precio: 1600, categoria: 'Móviles' },    
    { id: 4, nombre: 'iPhone 16', imagen: '/telefono1.jpg', descripcion: 'Última generación de Apple', precio: 1600, categoria: 'Móviles' },
    { id: 10, nombre: 'JBL Charge 5', imagen: '/altavoz.jpg', descripcion: 'Altavoz Bluetooth de alta calidad', precio: 150, categoria: 'Altavoces' },
    { id: 5, nombre: 'iPhone 16', imagen: '/telefono1.jpg', descripcion: 'Última generación de Apple', precio: 1600, categoria: 'Móviles' },
        
  ];

  selectedProduct: Producto | null = null;

  constructor(private carritoService: CarritoService, private popUpService: PopupService) {}

  seleccionarProducto(producto: Producto) {
    this.selectedProduct = producto;
  }

  cerrarDetalles() {
    this.selectedProduct = null;
  }

  categorias = [
    { name: 'Moviles', image: '/movil.jpg' },
    { name: 'Ordenadores', image: '/ordenador.jpg' },
    { name: 'Tablets', image: '/tablet.jpg' },
    { name: 'Altavoces', image: '/altavoces.jpg' }
  ];

  

  clickCategorias(url: any) {
    window.location.href = '/tienda';
  }

  agregarAlCarrito(producto: any) {
    if (this.selectedProduct) {
      this.carritoService.agregarAlCarrito(this.selectedProduct);
      this.cargando();
    }
  }

  cargando() {
    this.popUpService.loader('Cargando...', 
      'Añadiendo producto al carrito'
    );
    setTimeout(() => {
      this.popUpService.close();
    }, 1500);
  }

}
