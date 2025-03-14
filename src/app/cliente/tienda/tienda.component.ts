import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Producto {
  id: number;
  nombre: string;
  imagen: string;
  descripcion: string;
  precio: number;
  categoria: string;
}

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.component.scss'
})
export class TiendaComponent {
  categorias = ['Móviles', 'Ordenadores', 'Tablets', 'Altavoces'];

  productos: Producto[] = [
    { id: 1, nombre: 'iPhone 15', imagen: '/telefono1.jpg', descripcion: 'Última generación de Apple', precio: 1200, categoria: 'Móviles' },
    { id: 2, nombre: 'iPhone 16', imagen: '/telefono1.jpg', descripcion: 'Última generación de Apple', precio: 1600, categoria: 'Móviles' },
    { id: 3, nombre: 'iPhone 16', imagen: '/telefono1.jpg', descripcion: 'Última generación de Apple', precio: 1600, categoria: 'Móviles' },
    { id: 4, nombre: 'iPhone 16', imagen: '/telefono1.jpg', descripcion: 'Última generación de Apple', precio: 1600, categoria: 'Móviles' },
    { id: 5, nombre: 'iPhone 16', imagen: '/telefono1.jpg', descripcion: 'Última generación de Apple', precio: 1600, categoria: 'Móviles' },
    { id: 6, nombre: 'iPhone 16', imagen: '/telefono1.jpg', descripcion: 'Última generación de Apple', precio: 1600, categoria: 'Móviles' },

    { id: 7, nombre: 'MacBook Pro', imagen: '/mac.jpg', descripcion: 'Potente portátil de Apple', precio: 2500, categoria: 'Ordenadores' },
    { id: 8, nombre: 'MacBook Pro', imagen: '/mac.jpg', descripcion: 'Potente portátil de Apple', precio: 2500, categoria: 'Ordenadores' },
    { id: 9, nombre: 'MacBook Pro', imagen: '/mac.jpg', descripcion: 'Potente portátil de Apple', precio: 2500, categoria: 'Ordenadores' },    
    { id: 10, nombre: 'MacBook Pro', imagen: '/mac.jpg', descripcion: 'Potente portátil de Apple', precio: 2500, categoria: 'Ordenadores' },
    { id: 11, nombre: 'MacBook Pro', imagen: '/mac.jpg', descripcion: 'Potente portátil de Apple', precio: 2500, categoria: 'Ordenadores' },
    { id: 12, nombre: 'MacBook Pro', imagen: '/mac.jpg', descripcion: 'Potente portátil de Apple', precio: 2500, categoria: 'Ordenadores' },

    { id: 13, nombre: 'Tablet Galaxy', imagen: '/tablet-producto.jpg', descripcion: 'Tablet ligera y potente', precio: 800, categoria: 'Tablets' },
    { id: 14, nombre: 'Tablet Galaxy', imagen: '/tablet-producto.jpg', descripcion: 'Tablet ligera y potente', precio: 800, categoria: 'Tablets' },
    { id: 15, nombre: 'Tablet Galaxy', imagen: '/tablet-producto.jpg', descripcion: 'Tablet ligera y potente', precio: 800, categoria: 'Tablets' },
    { id: 16, nombre: 'Tablet Galaxy', imagen: '/tablet-producto.jpg', descripcion: 'Tablet ligera y potente', precio: 800, categoria: 'Tablets' },
    { id: 17, nombre: 'Tablet Galaxy', imagen: '/tablet-producto.jpg', descripcion: 'Tablet ligera y potente', precio: 800, categoria: 'Tablets' },
    { id: 18, nombre: 'Tablet Galaxy', imagen: '/tablet-producto.jpg', descripcion: 'Tablet ligera y potente', precio: 800, categoria: 'Tablets' },

    { id: 10, nombre: 'JBL Charge 5', imagen: '/altavoz.jpg', descripcion: 'Altavoz Bluetooth de alta calidad', precio: 150, categoria: 'Altavoces' },
    { id: 10, nombre: 'JBL Charge 5', imagen: '/altavoz.jpg', descripcion: 'Altavoz Bluetooth de alta calidad', precio: 150, categoria: 'Altavoces' },
    { id: 10, nombre: 'JBL Charge 5', imagen: '/altavoz.jpg', descripcion: 'Altavoz Bluetooth de alta calidad', precio: 150, categoria: 'Altavoces' },
    { id: 10, nombre: 'JBL Charge 5', imagen: '/altavoz.jpg', descripcion: 'Altavoz Bluetooth de alta calidad', precio: 150, categoria: 'Altavoces' },
    { id: 10, nombre: 'JBL Charge 5', imagen: '/altavoz.jpg', descripcion: 'Altavoz Bluetooth de alta calidad', precio: 150, categoria: 'Altavoces' },
    { id: 10, nombre: 'JBL Charge 5', imagen: '/altavoz.jpg', descripcion: 'Altavoz Bluetooth de alta calidad', precio: 150, categoria: 'Altavoces' },
  ];

  selectedProduct: Producto | null = null;

  seleccionarProducto(producto: Producto) {
    this.selectedProduct = producto;
  }

  cerrarDetalles() {
    this.selectedProduct = null;
  }

  
}
