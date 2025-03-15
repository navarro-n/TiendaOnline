import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../services/carrito.service';
import { Producto, TiendaComponent } from '../tienda/tienda.component';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent {
  carrito: Producto[] = [];

  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    this.carritoService.obtenerCarrito().subscribe(productos => {
      this.carrito = productos;
    });
  }    
}
