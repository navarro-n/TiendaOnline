import { Component, Input } from '@angular/core';
import {Producto} from '../tienda/tienda.component';

@Component({
  selector: 'app-carrito',
  imports: [],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent {
  @Input() carrito: Producto[] = [];

  eliminarDelCarrito(index: number) {
    this.carrito.splice(index, 1);
  }

  get totalCarrito() {
    return this.carrito.reduce((total, producto) => total + producto.precio, 0);
  }

}
