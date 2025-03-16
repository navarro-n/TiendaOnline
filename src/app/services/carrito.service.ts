import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../cliente/tienda/tienda.component';
import { TiendaComponent } from '../cliente/tienda/tienda.component';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carrito: Producto[] = [];
  private carritoSubject = new BehaviorSubject<Producto[]>([]);


  carrito$ = this.carritoSubject.asObservable();

  constructor() {
    const carritoStorage = sessionStorage.getItem('Productos');
    if (carritoStorage) {
      this.carrito = JSON.parse(carritoStorage);
      this.carritoSubject.next(this.carrito);
    }
  }
  agregarAlCarrito(producto: Producto) {
    this.carrito.push(producto);
    this.carritoSubject.next([...this.carrito]); // Emite la nueva lista del carrito
    this.setProductos(this.carrito);
  }

  obtenerCarrito() {
    return this.carrito$;
  }

  setProductos(Productos: Producto[]) {
    sessionStorage.setItem('Productos', JSON.stringify(Productos));
  }

  eliminarDelCarrito(producto: Producto) {
    this.carrito = this.carrito.filter(item => item.id !== producto.id);
    this.carritoSubject.next([...this.carrito]); // Emite la nueva lista del carrito
    this.setProductos(this.carrito);
  }

  vaciarCarrito() {
    this.carrito = []; // Vacía el array del carrito
    this.carritoSubject.next([]); // Notifica que el carrito está vacío
    this.setProductos(this.carrito); // Actualiza en sessionStorage
  }

}
