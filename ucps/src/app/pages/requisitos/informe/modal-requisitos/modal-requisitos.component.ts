import { Component, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { RepositorService } from '../../../../services/repositor.service';

@Component({
  selector: 'ngx-modal-requisitos',
  templateUrl: 'modal-requisitos.component.html',
  styleUrls: ['modal-requisitos.component.scss'],
})
export class ModalRequisitosComponent {

  @Input() title: string;
  @Input() casoUsoF:string;
  @Input() requeF:string;
  @Input() listarReqCas:any;
  //listacasoReqe:any;

  constructor(protected ref: NbDialogRef<ModalRequisitosComponent>,private repositorService:RepositorService) {
    this.listarReqCas=[];
  }

  dismiss() {
    this.ref.close();
  }
  ngOnInit() {
    console.log('ListaReqCas',this.listarReqCas);
  }
  filtrosSql(){
    //this.lista_author_username = this.listaTotal.filter((r:any) => r.author_username == this.select_author_username.code);
    //this.dataSource =  this.lista_author_username;
   
  }
 
}
