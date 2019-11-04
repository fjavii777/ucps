import {Component, OnInit} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ModalAddProgComponent} from './modal-add-prog/modal-add-prog.component';
import {ProgramaService} from '../../../services/ges-programa/programa.service';

@Component({
  selector: 'ngx-add-programa',
  styleUrls: ['./add-programa.component.scss'],
  templateUrl: './add-programa.component.html',
})
export class AddProgramaComponent implements OnInit {

  loading = false;
  listProgramas: any;
  modalref: NgbModalRef;

  constructor(private modalService: NgbModal,
              private programaService: ProgramaService) {
  }
  ngOnInit(): void {
    this.listarProgramas();
  }
  listarProgramas() {
    this.loading = true;
    this.programaService.getListarProgramasLista()
      .subscribe(res => {
        console.log(res);
        this.listProgramas = res;
        this.loading = false;
      });
    console.log(this.listProgramas);
  }
  btnAddAdministrativo() {
    const modalR = this.modalService.open(ModalAddProgComponent, { size: 'sm'});
    modalR.result.then(result => {
      if (result) {
        this.listarProgramas();
      } else {
      }
    }).catch((res) => {});
  }
  editarAdministrativo(id: string) {
    this.programaService.getProgramaById(id)
      .subscribe(res => {
        console.log('mi objeto es :', res);
        if (res) {
          this.modalref = this.modalService.open(ModalAddProgComponent, {size: 'sm'});
          (<ModalAddProgComponent>(this.modalref.componentInstance)).iniciarFormulario(res);
          this.modalref.result.then(result => {
            if (result) {
              this.listarProgramas();
            } else {
            }
          }).catch((resp) => {});
        } else {
          console.log('No existe curso');
        }
      });
  }
}




