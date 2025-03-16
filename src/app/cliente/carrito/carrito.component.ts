import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../services/carrito.service';
import { Producto} from '../tienda/tienda.component';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent {
  carrito: Producto[] = [];
  checkoutForm: boolean = false;
  
  compra = {
    nombre: '',
    apellido: '',
    direccion: '',
    ciudad: '',
    pais: '',
    metodoPago: ''
  };

  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    this.carritoService.carrito$.subscribe(productos => {
      this.carrito = productos;
      console.log(this.carrito);
      console.log(productos);
    });
  }
  eliminarDelCarrito(producto: Producto) {
    this.carritoService.eliminarDelCarrito(producto);
  }
  
  checkout() {
    this.carritoService.obtenerCarrito();
    this.carritoService.setProductos(this.carrito);

  }

  changecheckoutForm(){
    this.checkoutForm = !this.checkoutForm

  }

  cerrarDetalles(){
    this.checkoutForm = false;
  }



  procesarCompra(form: NgForm) {
    if (form.invalid) {
      alert('Por favor, completa todos los campos antes de confirmar la compra.');
      return;
    }

    console.log('Compra realizada:', this.compra);
    alert('Compra realizada con éxito');

    // Vaciar carrito
    this.carrito = [];
    this.carritoService.vaciarCarrito(); // Limpia el carrito en el servicio

    // Cerrar el formulario
    this.checkoutForm = false;

    // Resetear formulario
    form.resetForm();
  }

}
