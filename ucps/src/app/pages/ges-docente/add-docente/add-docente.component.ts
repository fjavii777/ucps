import {Component, OnInit} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {GesDocenteModel} from '../../../models/ges-docente/ges-docente.model';
import {DocenteService} from '../../../services/ges-docente/docente.service';
import {ModalAddDocenteComponent} from './modal-add-docente/modal-add-docente.component';

@Component({
  selector: 'ngx-add-docente',
  styleUrls: ['./add-docente.component.scss'],
  templateUrl: './add-docente.component.html',
})
export class AddDocenteComponent implements OnInit {

    loading = false;
    listDocente: GesDocenteModel[] = [];
    modalref: NgbModalRef;

    constructor(private modalService: NgbModal,
                private docenteservice: DocenteService) {
    }
    ngOnInit(): void {
      this.listarDocente();
    }
    listarDocente() {
      this.loading = true;
      this.docenteservice.getListarDocente()
        .subscribe(res => {
          this.listDocente = res;
          this.loading = false;
        });
    }
    btnAddDocente() {
      const modalR = this.modalService.open(ModalAddDocenteComponent, { size: 'lg'});
      modalR.result.then(result => {
        if (result) {
          this.listarDocente();
        } else {
        }
      }).catch((res) => {});
    }
    editarDocente(dni: string) {
        // console.log("Eentreeeeeeee");
        // console.log(dni);
      this.docenteservice.postBuscarDocentexId(dni)
        .subscribe(res => {
            console.log("mi objeto es :",res);
          if (res.docdni) {
            this.modalref = this.modalService.open(ModalAddDocenteComponent, {size: 'lg'});
            (<ModalAddDocenteComponent>(this.modalref.componentInstance)).iniciarFormulario(res);
            this.modalref.result.then(result => {
              if (result) {
                this.listarDocente();
              } else {
              }
            }).catch((resp) => {});
          } else {
            console.log('No existe alumno');
          }
        });
    }
  
}




