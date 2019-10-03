import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild} from '@angular/router';
import {SeguridadService} from './seguridad.service';

@Injectable()
export class RedirectGuard implements CanActivate, CanActivateChild  {
  constructor(private seguridad: SeguridadService, private router: Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.seguridad.existeToken()) {
      return true;
    }else {
      localStorage.clear();
      this.router.navigate(['/login']);
      return false;
    }
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.seguridad.existeToken()) {
      return true;
    }else {
      localStorage.clear();
      this.router.navigate(['/login']);
      // window.location.reload();
      return false;
    }
  }
}
