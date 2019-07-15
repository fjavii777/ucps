import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {
  DeleteDetalleModal,
  GesMatriculaDetalleModel,
} from '../../../../models/ges-matricula/ges-matricula-detalle.model';
import {MatriculaDetalleService} from '../../../../services/ges-matricula/matriculaDetalle.service';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ModalDetCabComponent} from './modal-det-cab/modal-det-cab.component';

@Component({
  selector: 'ngx-matricula-detalle',
  templateUrl: './mat-detalle.component.html',
  styleUrls: ['./mat-detalle.component.scss'],
})
export class MatDetalleComponent {
  idCabecera: string;
  loading = false;
  modalref: NgbModalRef;
  listDetalles: GesMatriculaDetalleModel[] = [];
  constructor(private route: ActivatedRoute,
              private modalService: NgbModal,
              private detalleMatService: MatriculaDetalleService) {
    route.params.subscribe(
      data => {
        this.idCabecera = data.id;
        this.listarDetalles(this.idCabecera);
      },
    );
  }
  listarDetalles(idCabecera: string) {
    this.detalleMatService.getListarDetallesXidCabecera(idCabecera).subscribe(
      resp => {
        this.listDetalles = resp;
      },
    );
  }
  btnAddDetalle() {
    this.modalref = this.modalService.open(ModalDetCabComponent, {size: 'lg'});
    (<ModalDetCabComponent>(this.modalref.componentInstance)).iniciarFormulario(this.idCabecera, false, null);
    this.modalref.result.then(result => {
      if (result) {
        this.listarDetalles(this.idCabecera);
      } else {
      }
    }).catch((resp) => {});
  }
  editarDetalle(iddetalle: string) {
    this.detalleMatService.postBuscarDetalleXid(iddetalle)
      .subscribe(res => {
        if (res.matdetid) {
          this.modalref = this.modalService.open(ModalDetCabComponent, {size: 'lg'});
          (<ModalDetCabComponent>(this.modalref.componentInstance)).iniciarFormulario(this.idCabecera, true, res);
          this.modalref.result.then(result => {
            if (result) {
              this.listarDetalles(this.idCabecera);
            } else {
            }
          }).catch((resp) => {});
        }
      });
  }
  cambiarEstadoDetalle(detallemodel: GesMatriculaDetalleModel) {
    const deleteDetalle = new DeleteDetalleModal();
    deleteDetalle.matdetid = detallemodel.matdetid;
    if (detallemodel.matdetestreg === 'A') {
      deleteDetalle.matdetestreg = '*';
    } else {
      deleteDetalle.matdetestreg = 'A';
    }
    this.detalleMatService.deleteDetalle(deleteDetalle)
      .subscribe(res => {
        console.log('reg' + res.matdetestreg);
        detallemodel.matdetestreg = res.matdetestreg;
      });
  }
}
