import {Component, OnInit} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
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
              private matriculaService: MatriculaService) {
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
      }, error => {
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
  editarMatricula(matid: string) {
    this.matriculaService.getListarMatriculaByID(matid)
      .subscribe(res => {
        if (res) {
          this.modalref = this.modalService.open(ModalUpdateMatriculaComponent, {size: 'lg'});
          (<ModalUpdateMatriculaComponent>(this.modalref.componentInstance)).iniciarFormulario(res);
          this.modalref.result.then(result => {
            if (result) {
              this.listarMatriculas();
            } else {
            }
          }).catch((resp) => {});
        } else {
          console.log('No existe matricula');
        }
      });
  }
}




