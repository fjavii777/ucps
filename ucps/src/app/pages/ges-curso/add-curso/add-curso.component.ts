import {Component, OnInit} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {AdministrativoService} from '../../../services/ges-administrativo/administrativo.service';
import {ModalAddCursoComponent} from './modal-add-curso/modal-add-curso.component';
import {CursoService} from '../../../services/ges-curso/curso.service';

@Component({
  selector: 'ngx-add-curso',
  styleUrls: ['./add-curso.component.scss'],
  templateUrl: './add-curso.component.html',
})
export class AddCursoComponent implements OnInit {

  loading = false;
  listAdtvo: any;
  modalref: NgbModalRef;

  constructor(private modalService: NgbModal,
              private cursoService: CursoService) {
  }
  ngOnInit(): void {
    this.listarCursos();
  }
  listarCursos() {
    this.loading = true;
    this.cursoService.getListarCursos()
      .subscribe(res => {
        console.log(res);
        this.listAdtvo = res;
        this.loading = false;
      });
    console.log(this.listAdtvo);
  }
  btnAddAdministrativo() {
    const modalR = this.modalService.open(ModalAddCursoComponent, { size: 'sm'});
    modalR.result.then(result => {
      if (result) {
        this.listarCursos();
      } else {
      }
    }).catch((res) => {});
  }
  editarAdministrativo(id: string) {
    // console.log("Eentreeeeeeee");
    // console.log(dni);
    this.cursoService.getCursoById(id)
      .subscribe(res => {
        console.log('mi objeto es :', res);
        if (res) {
          this.modalref = this.modalService.open(ModalAddCursoComponent, {size: 'sm'});
          (<ModalAddCursoComponent>(this.modalref.componentInstance)).iniciarFormulario(res);
          this.modalref.result.then(result => {
            if (result) {
              this.listarCursos();
            } else {
            }
          }).catch((resp) => {});
        } else {
          console.log('No existe curso');
        }
      });
  }
}




