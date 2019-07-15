import {Component, OnInit} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {AlumnoService} from '../../../services/ges-usu/alumno.service';
import {
  DeleteMatriculaCabecera,
  GesMatriculaCabeceraModel,
} from '../../../models/ges-matricula/ges-matricula-cabecera.model';
import {Router} from '@angular/router';
import {ModalMatCabComponent} from './modal-mat-cab/modal-mat-cab.component';
import {MatriculaCabeceraService} from '../../../services/ges-matricula/matriculaCabecera.service';

@Component({
  selector: 'ngx-matricula-v2',
  styleUrls: ['./matricula-v2.component.scss'],
  templateUrl: './matricula-v2.component.html',
})
export class MatriculaV2Component implements OnInit {
  inputBuscar = '';
  loading = false;
  listCabeceras: GesMatriculaCabeceraModel[] = [];
  modalref: NgbModalRef;

  constructor(private router: Router,
              private modalService: NgbModal,
              private matcabeceraService: MatriculaCabeceraService,
              private alumnoservice: AlumnoService) {
  }
  ngOnInit(): void {
    this.listarAllCabeceras();
  }
  listarAllCabeceras() {
    this.loading = true;
    this.matcabeceraService.getListarMatriculaCabecera()
      .subscribe(res => {
        this.listCabeceras = res;
        this.loading = false;
      });
  }
  listarCabacerasxDni(dni: string) {
    this.loading = true;
    this.matcabeceraService.getListarMatriculaCabeceraFiltro(dni)
      .subscribe(res => {
        this.listCabeceras = res;
        this.loading = false;
      });
  }
  btnAddCabecera() {
    const modalR = this.modalService.open(ModalMatCabComponent, { size: 'sm'});
    modalR.result.then(result => {
      if (result) {
        this.listarAllCabeceras();
      } else {
      }
    }).catch((res) => {});
  }
  editarCabecera(idcabecera: string) {
    this.matcabeceraService.postBuscarCabeceraXid(idcabecera)
      .subscribe(res => {
        if (res.matcabid) {
          this.modalref = this.modalService.open(ModalMatCabComponent, {size: 'sm'});
          (<ModalMatCabComponent>(this.modalref.componentInstance)).iniciarFormulario(res);
          this.modalref.result.then(result => {
            if (result) {
              this.listarAllCabeceras();
            } else {
            }
          }).catch((resp) => {});
        } else {
          console.log('No existe alumno');
        }
      });
  }
  abrirDetalles(idcabecera: number) {
    this.router.navigate(['/pages/ges-matricula/matriculadetalle/' + idcabecera]);
  }
  cambiarEstado(cabecera: GesMatriculaCabeceraModel) {
    const deleteDetalle = new DeleteMatriculaCabecera();
    deleteDetalle.matcabid = cabecera.matcabid;
    if (cabecera.matcabestreg === 'A') {
      deleteDetalle.matcabestreg = '*';
    } else {
      deleteDetalle.matcabestreg = 'A';
    }
    this.matcabeceraService.deleteCabecera(deleteDetalle)
      .subscribe(res => {
        cabecera.matcabestreg = res.matcabestreg;
      });
  }
}




