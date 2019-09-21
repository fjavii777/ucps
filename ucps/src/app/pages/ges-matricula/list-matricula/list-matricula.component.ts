import {Component, OnInit} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {GesDocenteModel} from '../../../models/ges-docente/ges-docente.model';
import {DocenteService} from '../../../services/ges-docente/docente.service';
import {ModalAddDocenteComponent} from '../../ges-docente/add-docente/modal-add-docente/modal-add-docente.component';
import {ModalUpdateMatriculaComponent} from './modal-update-matricula/modal-update-matricula.component';
import {MatriculaService} from '../../../services/ges-matricula/matricula.service';

@Component({
    selector: 'ngx-list-matricula',
    styleUrls: ['./list-matricula.component.scss'],
    templateUrl: './list-matricula.component.html',
})
export class ListMatriculaComponent implements OnInit  {
  loading = false;
  listMatriculas = [];
  modalref: NgbModalRef;

  constructor(private modalService: NgbModal,
              private matriculaService: MatriculaService,
              private docenteservice: DocenteService) {
  }
  ngOnInit(): void {
    this.listarMatriculas();
  }
  listarMatriculas() {
    this.loading = true;
    this.matriculaService.getListarAllMatriculas()
      .subscribe(res => {
        this.listMatriculas = res;
        this.loading = false;
      });
  }
  btnAddMatricula() {
    const modalR = this.modalService.open(ModalUpdateMatriculaComponent, { size: 'lg'});
    modalR.result.then(result => {
      if (result) {
        this.listarMatriculas();
      } else {
      }
    }).catch((res) => {});
  }
  editarDocente(dni: string) {
    this.docenteservice.postBuscarDocentexId(dni)
      .subscribe(res => {
        console.log('mi objeto es :', res);
        if (res.docdni) {
          this.modalref = this.modalService.open(ModalAddDocenteComponent, {size: 'lg'});
          (<ModalAddDocenteComponent>(this.modalref.componentInstance)).iniciarFormulario(res);
          this.modalref.result.then(result => {
            if (result) {
              this.listarMatriculas();
            } else {
            }
          }).catch((resp) => {});
        } else {
          console.log('No existe alumno');
        }
      });
  }
}




