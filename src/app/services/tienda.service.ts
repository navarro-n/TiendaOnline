import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  private categoriaSeleccionada = new BehaviorSubject<string | null>(null);
  categoriaSeleccionada$ = this.categoriaSeleccionada.asObservable();

  seleccionarCategoria(categoria: string) {
    this.categoriaSeleccionada.next(categoria);
  }
}
