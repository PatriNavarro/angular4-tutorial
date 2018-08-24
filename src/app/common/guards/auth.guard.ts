import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService} from '../services/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public _authService: AuthenticationService, public _router: Router) {  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if ( this._authService.isLoggedIn()) {
      return true;
    }
    // redireccionamiento manual al login
    console.log('Acceso denegado');
    this._router.navigate(['/login' ]);
    return false;
  }
}
