import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../auth/token.service';
import { first, firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const authGuard: CanActivateFn = async (route, state) => { //ruta donde va a ir el usuario
  
  const tokenService = inject(TokenService);
  const router = inject(Router);
  const http = inject(HttpClient);
  
  const accessToken = tokenService.getAccessToken();
  const refreshToken = tokenService.getRefreshToken();

  if (!accessToken) {
    router.navigate(['/login']);
    return false;
  }

  try {
    const response: any = await firstValueFrom(
      http.post(`${environment.apiUrl}/users/check-token`, { 
        username: "camilo",
        token: accessToken,
      })
    )
    return true;
  }

  catch (error) {
    tokenService.removeToken();
    router.navigate(['/login']);
    return false;
  }
};
