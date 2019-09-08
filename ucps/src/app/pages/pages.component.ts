import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';


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
export class PagesComponent {

  menu = MENU_ITEMS;
  constructor() {
    //this.auth.mitiposUsuario()
    this.mostrarVista(1);  
  }
  mostrarVista(estado:any){
        this.recorrerMenu(estado);
  }
  recorrerMenu(numero:number){
    for(var i=0;i<this.menu.length;i++){
      for(var j=0;j<this.menu[i].data.length;j++){
         if(this.menu[i].data[j].number == numero){
            this.menu[i].hidden=false;
         }
      }
    }
  }
}
