import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private readonly ACCES_TOKEN_KEY :string = 'tienda_token';
  private readonly REFRESH_TOKEN_KEY : string = 'tienda_refresh_token';

  constructor(
    private cookieService: CookieService,
  ) { }

  saveTokens(token: string, refreshToken: string): void {
    this.cookieService.set(this.ACCES_TOKEN_KEY, token, {
    path: "/",
    secure: environment.tokenSecure, //En producción esto tiene que ser true
    sameSite: "Strict"
    })

    this.cookieService.set(this.REFRESH_TOKEN_KEY, refreshToken, {
      path: "/",
      secure: environment.tokenSecure,
      sameSite: "Strict"
      })
  }
  getAccessToken(): string {
    return this.cookieService.get(this.ACCES_TOKEN_KEY);    
  } 
  getRefreshToken(): string {
    return this.cookieService.get(this.REFRESH_TOKEN_KEY);    
  }
  removeToken(): void {
    this.cookieService.delete(this.ACCES_TOKEN_KEY, '/', '', environment.tokenSecure, 'Strict'); //En producción esto tiene que ser true
    this.cookieService.delete(this.REFRESH_TOKEN_KEY , '/', '', environment.tokenSecure, 'Strict');//En producción esto tiene que ser true
  }  
}
