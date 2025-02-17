import { Component } from '@angular/core';
import { GraphicPrimeraCajaComponent } from "../graphic-primera-caja/graphic-primera-caja.component";
import { GraphicLineComponent } from "../graphic-line/graphic-line.component";

@Component({
  selector: 'app-graphics',
  imports: [GraphicPrimeraCajaComponent, GraphicLineComponent],
  standalone: true,
  templateUrl: './graphics.component.html',
  styleUrl: './graphics.component.scss'
})
export class GraphicsComponent {

}
