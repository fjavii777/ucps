import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ModalAddPensionComponent} from '../modal-add-pension/modal-add-pension.component';
import {GesPensionModel} from '../../../../models/ges-pensiones/ges-pensiones.model';
import {PensionService} from '../../../../services/ges-pensiones/ges-pensiones.service';
import {GesPensionlListModel} from '../../../../models/ges-pensiones/ges-pensiones-list.model';

@Component({
  selector: 'ngx-pension-detalle',
  templateUrl: './pension-detalle.component.html',
  styleUrls: ['./pension-detalle.component.scss'],
})
export class PensionDetalleComponent {
idCabecera: string;
minombre:string;
misede:string;
miprograma:string;
loading = false;
listmisPensiones: GesPensionModel[] = [];
modalref: NgbModalRef;
mipension:GesPensionlListModel=new GesPensionlListModel();

constructor(private modalService: NgbModal,
            private pensionservice: PensionService,private route: ActivatedRoute) {
            route.params.subscribe(
                data => {
                    this.idCabecera = data.id;
                    this.minombre=data.nombres;
                    this.miprograma=data.programa;
                    this.misede=data.sede;
                },
            );
}
ngOnInit(): void {
  this.listarPension();
}
listarPension() {
  this.loading = true;
  this.pensionservice.postBuscarPensionxParteIdDetalle(this.idCabecera)
    .subscribe(res => {
      this.listmisPensiones = res;
      this.loading = false;
    });
}
btnAddPension() {
  const modalR = this.modalService.open(ModalAddPensionComponent, { size: 'lg'});
  (<ModalAddPensionComponent>(modalR.componentInstance)).enviarId(this.idCabecera);
  modalR.result.then(result => {
    if (result) {
      this.listarPension();
    } else {
    }
  }).catch((res) => {});
}
editarDocente(id: string) {
   // console.log(dni);
  this.pensionservice.postBuscarPensionxId(id)
    .subscribe(res => {
        //console.log("mi objeto es :",res);
      if (res.pagid) {
        this.modalref = this.modalService.open(ModalAddPensionComponent, {size: 'lg'});
        (<ModalAddPensionComponent>(this.modalref.componentInstance)).iniciarFormulario(res,this.idCabecera);
        this.modalref.result.then(result => {
          if (result) {
            this.listarPension()
          } else {
          }
        }).catch((resp) => {});
      } else {
        console.log('No existe alumno');
      }
    });
}
}
