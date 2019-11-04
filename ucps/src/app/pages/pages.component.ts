import {Component, HostBinding, OnInit} from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import {SeguridadService} from '../services/authentication/seguridad.service';


@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
      <ngx-sample-layout>
          <nb-menu [items]="menu"></nb-menu>
          <router-outlet></router-outlet>
      </ngx-sample-layout>
  `,
})
export class PagesComponent implements OnInit {
  token: any;
  tipoUser: number;
  @HostBinding('class.is-login')
  menu = MENU_ITEMS;
  constructor(private seguridadService: SeguridadService) {
    if (this.seguridadService.existeToken()) {
      this.token =  this.seguridadService.getDecodedAccessToken();
      this.tipoUser = Number(this.token.aud);
      this.mostrarVista(this.tipoUser);
    }
  }
  @HostBinding('class.is-open')
  prueba() {
  }
  ngOnInit(): void {
  }

  mostrarVista(estado: any) {
    this.recorrerMenu(estado);
    // this.recorrerMenu(4);
  }
  recorrerMenu(numero: number) {
    for (let i = 0; i < this.menu.length; i++) {
      for (let j = 0; j < this.menu[i].data.length; j++) {
        if (this.menu[i].data[j].number === numero) {
          this.menu[i].hidden = false;
        }else {
          this.menu[i].hidden = true;
        }
      }
    }
  }
}
