import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CredentialsService} from '../../services/auth/credentials.service';
import {LoginInterface, UserInterface} from '../../services/interfaces/auth';
import { Router } from '@angular/router';
import { TokenService } from '../../services/auth/token.service';
import { UseStateService } from '../../services/auth/use-state.service';
import { PopupService } from '../../services/utils/popup.service';

@Component({
  selector: 'app-registro',
    imports: [
        ReactiveFormsModule
    ],
  standalone: true,
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent {

  registerForm: FormGroup;
  

  constructor(
    private formBuilder: FormBuilder,
    private credentialsService: CredentialsService,
    private popupService: PopupService,
    private tokenService: TokenService,
    private useStateService: UseStateService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      roleName: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      terms: ['', [Validators.required]]
    })
  }


  submit() {
    if (this.registerForm.invalid) {
      return;
    }

    this.credentialsService.register(this.registerForm.value as UserInterface).subscribe({
      next: (data) => {
        this.credentialsService.login(this.registerForm.value as LoginInterface).subscribe({
              next: (data) => {
                this.popupService.loader("Cargando...", "Espere un momento");
        
                setTimeout(() => {
                  this.tokenService.saveTokens(data.token, "234325423423")
                  this.useStateService.save(data.username, data.role)
                  this.popupService.close();
                  this.router.navigate(['/app/control-panel']);
                }, 1500)
        
              },
              error: err => {
                let message;
                if (err.error == "Invalid password") {
                  message = "Contraseña incorrecta, inténtelo de nuevo."
                }
                else if (err.error == "User not found") {
                  message = "El usuario no existe. Compruebe los datos o registrate en la plataforma"
                }
                else {
                  message = err.error;
                }
        
                this.popupService.showMessage(
                  'Ups ha ocurrido un error', message, 'error'
                );
              }
            })
      },
      error: err => {
        console.log(err)
      }
    })
  }

}