import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild} from '@angular/router';
import {SeguridadService} from './seguridad.service';

@Injectable()
export class RedirectGuard implements CanActivate, CanActivateChild  {
  constructor(private seguridad: SeguridadService, private router: Router) {
    console.log('entro aqui');
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.seguridad.existeToken()) {
      console.log('exite token');
      return true;
    }else {
      console.log('no exite token');
      localStorage.clear();
      this.router.navigate(['/login']);
      // window.location.reload();
      return false;
    }
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.seguridad.existeToken()) {
      console.log('exite token hijo');
      return true;
    }else {
      console.log('NO exite token hijo');
      localStorage.clear();
      this.router.navigate(['/login']);
      // window.location.reload();
      return false;
    }
  }
}
