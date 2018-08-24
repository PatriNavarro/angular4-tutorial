import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService} from '../services/authentication.service';

@Injectable()
export class PublicGuard implements CanActivate {
  constructor(public _authService: AuthenticationService, public _router: Router) {  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if ( ! this._authService.isLoggedIn()) {
      return true;
    }
    // El usuario ya está autenticado o sea que directamente al home
    console.log('Usuario ya autenticado');
    this._router.navigate(['/home' ]);
    return false;
  }
}
