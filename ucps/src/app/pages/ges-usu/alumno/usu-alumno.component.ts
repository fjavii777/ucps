import {Component, OnInit} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ModalAddAlumnoComponent} from './modal-add-alumno/modal-add-alumno.component';
import {AlumnoService} from '../../../services/ges-usu/alumno.service';
import {DeleteAlumnoModel, GesUsuAlumnoModel} from '../../../models/ges-usu/ges-usu-alumno.model';

@Component({
  selector: 'ngx-usu-alumno',
  styleUrls: ['./usu-alumno.component.scss'],
  templateUrl: './usu-alumno.component.html',
})
export class UsuAlumnoComponent implements OnInit {
  loading = false;
  listAlumnos: GesUsuAlumnoModel[] = [];
  modalref: NgbModalRef;

  constructor(private modalService: NgbModal,
              private alumnoservice: AlumnoService) {
  }
  ngOnInit(): void {
    this.listarAlumnos();
  }
  listarAlumnos() {
    this.loading = true;
    this.alumnoservice.getListarAlumnos()
      .subscribe(res => {
        this.listAlumnos = res;
        this.loading = false;
      });
  }
  btnAddAlumno() {
    const modalR = this.modalService.open(ModalAddAlumnoComponent, { size: 'lg'});
    modalR.result.then(result => {
      if (result) {
        this.listarAlumnos();
      } else {
      }
    }).catch((res) => {});
  }
  editarAlumno(dni: string) {
    this.alumnoservice.postBuscarAlumnoxId(dni)
      .subscribe(res => {
        if (res.aludni) {
          this.modalref = this.modalService.open(ModalAddAlumnoComponent, {size: 'lg'});
          (<ModalAddAlumnoComponent>(this.modalref.componentInstance)).iniciarFormulario(res);
          this.modalref.result.then(result => {
            if (result) {
              this.listarAlumnos();
            } else {
            }
          }).catch((resp) => {});
        } else {
          console.log('No existe alumno');
        }
      });
  }
  cambiarEstado(c: GesUsuAlumnoModel) {
    const deleteAlumno = new DeleteAlumnoModel();
    deleteAlumno.aldni = c.aludni;
    if (c.aluestreg === 'A') {
      deleteAlumno.alestreg = '*';
    } else {
      deleteAlumno.alestreg = 'A';
    }
    this.alumnoservice.deleteAlumno(deleteAlumno)
      .subscribe(res => {
        c.aluestreg = res.aluestreg;
      });
  }
  filtroDNI(filtro) {
    console.log(filtro);
    if (filtro) {
      this.loading = true;
      this.alumnoservice.getListarSearchAlumno(filtro)
        .subscribe(res => {
          this.listAlumnos = res;
          this.loading = false;
        });
    } else {
      this.listarAlumnos();
    }
  }
}




