import {Component, OnInit} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {GesAdministrativoModel} from '../../../models/ges-administrativo/ges-administrativo.model';
import {AdministrativoService} from '../../../services/ges-administrativo/administrativo.service';
import {ModalAddAdministrativoComponent} from './modal-add-administrativo/modal-add-administrativo.component';

@Component({
  selector: 'ngx-add-administrativo',
  styleUrls: ['./add-administrativo.component.scss'],
  templateUrl: './add-administrativo.component.html',
})
export class AddAdministrativoComponent implements OnInit {

    loading = false;
    listAdtvo: GesAdministrativoModel[] = [];
    modalref: NgbModalRef;

    constructor(private modalService: NgbModal,
                private adtvoservice: AdministrativoService) {
    }
    ngOnInit(): void {
      this.listarAdministrativo();
    }
    listarAdministrativo() {
      this.loading = true;
      this.adtvoservice.getListarAdministrativo()
        .subscribe(res => {
          this.listAdtvo = res;
          this.loading = false;
        });
    }
    btnAddAdministrativo() {
      const modalR = this.modalService.open(ModalAddAdministrativoComponent, { size: 'lg'});
      modalR.result.then(result => {
        if (result) {
          this.listarAdministrativo();
        } else {
        }
      }).catch((res) => {});
    }
    editarAdministrativo(dni: string) {
        // console.log("Eentreeeeeeee");
        // console.log(dni);
      this.adtvoservice.postBuscarAdministrativoxId(dni)
        .subscribe(res => {
            console.log("mi objeto es :",res);
          if (res.admdni) {
            this.modalref = this.modalService.open(ModalAddAdministrativoComponent, {size: 'lg'});
            (<ModalAddAdministrativoComponent>(this.modalref.componentInstance)).iniciarFormulario(res);
            this.modalref.result.then(result => {
              if (result) {
                this.listarAdministrativo();
              } else {
              }
            }).catch((resp) => {});
          } else {
            console.log('No existe adminstrativo');
          }
        });
    }
  
}




