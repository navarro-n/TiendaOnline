import { Component } from '@angular/core';
import { GraphicPrimeraCajaComponent } from "../graphic-primera-caja/graphic-primera-caja.component";
import { GraphicLineComponent } from "../graphic-line-1/graphic-line.component";
import { GraphicLine2Component } from "../graphic-line-2/graphic-line-2.component";
import { GraphicTerceraCajaComponent } from "../graphic-tercera-caja/graphic-tercera-caja.component";

@Component({
  selector: 'app-graphics',
  imports: [GraphicPrimeraCajaComponent, GraphicLineComponent, GraphicLine2Component, GraphicTerceraCajaComponent],
  standalone: true,
  templateUrl: './graphics.component.html',
  styleUrl: './graphics.component.scss'
})
export class GraphicsComponent {

}
