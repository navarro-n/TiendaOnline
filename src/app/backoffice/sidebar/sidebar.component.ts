import {Component, OnInit} from '@angular/core';
import {SidebarStatusService} from '../../services/status/sidebar-status.service';
import { Router, RouterLink } from '@angular/router';
import { PopupService } from '../../services/utils/popup.service';
import { TokenService } from '../../services/auth/token.service';
import { UseStateService } from '../../services/auth/use-state.service';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {


  isActiveMenuHeader: boolean = true;
  constructor(
    private sidebarStatusService: SidebarStatusService,
    private router: Router,
    private tokenService: TokenService,
    private popupService: PopupService,
    private userStateService: UseStateService,
    
  )
  {}

  ngOnInit(): void {
    this.sidebarStatusService.status$.subscribe(status => {
      this.isActiveMenuHeader = status;
    })
  }

  closeSession(): void {
    this.popupService.loader("Cerrando sesión", "Espere un momento");
    this.tokenService.removeToken();
    this.userStateService.removeSession()
    setTimeout(() => {
      this.popupService.close();
      this.router.navigate(['/login']);
    }, 1500)
  }

  
  clickPerfil(): void {
    this.router.navigate(['/app/perfil']);
  }

  clickInicio(): void {
    this.router.navigate(['/app/control-panel']);
  }

  clickCerrarSesion(): void {
    this.router.navigate(['/app/header-cliente']);
  }

  clickProductos(): void {
    this.router.navigate(['/app/productos']);
  }
  
}
