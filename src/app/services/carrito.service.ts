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

  agregarAlCarrito(producto: Producto) {
    this.carrito.push(producto);
    this.carritoSubject.next([...this.carrito]); // Emite la nueva lista del carrito
  }

  obtenerCarrito() {
    return this.carrito$;
  }
}
