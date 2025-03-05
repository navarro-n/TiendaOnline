import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FooterComponent,
    CommonModule
  ],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TiendaOnline';

  constructor(public router: Router) {}
}