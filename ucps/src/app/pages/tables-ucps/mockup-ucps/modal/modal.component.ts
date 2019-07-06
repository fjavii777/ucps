import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {DatePipe} from '@angular/common';
import { BackupService } from '../../../../services/backup.service';

@Component({
  selector: 'ngx-modal',
  template: `
    <div class="modal-header">
      <span></span>
      <button class="close" aria-label="Close" (click)="closeModal()">
        <span aria-hidden="true"></span>
      </button>
    </div>
    <div class="modal-body">
    <h1>Generar Backup </h1>
    <div class="modal-footer"> 
    
    </div>
      <h1>{{ modalContent }}</h1>
      <br>
      <button class="btn btn-md btn-danger"  (click)="open()" >Generar Backup</button>
    </div>
  `,
})


export class ModalComponent implements OnInit {
  midia:any  = new Date();
  fecha :string;
  
  modalHeader: string;
  modalContent = 'asad';
  
  constructor(private activeModal: NgbActiveModal,private datepipe:DatePipe,private backupService:BackupService) {
    
  var ddMMyyyy = this.datepipe.transform(new Date(),"dd-MM-yyyy");
  this.modalContent=ddMMyyyy;
    //console.log(this.midia);
  }
ngOnInit() {
  
  //console.log("Fecha",ddMMyyyy);
  }
open(){
  var ddMMyyyy = this.datepipe.transform(new Date(),"dd-MM-yyyy");
  //this.modalContent=ddMMyyyy;
  this.backupService.generarBocku(ddMMyyyy);
  console.log("Se genero bien");
}

  closeModal() {
      
    this.activeModal.close();
  }
}
