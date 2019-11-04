import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ModalAddPensionComponent} from '../modal-add-pension/modal-add-pension.component';
import {GesPensionModel} from '../../../../models/ges-pensiones/ges-pensiones.model';
import {PensionService} from '../../../../services/ges-pensiones/ges-pensiones.service';
import {GesPensionlListModel} from '../../../../models/ges-pensiones/ges-pensiones-list.model';
import {Router} from '@angular/router';
@Component({
  selector: 'ngx-pension-detalle',
  templateUrl: './pension-detalle.component.html',
  styleUrls: ['./pension-detalle.component.scss'],
})
export class PensionDetalleComponent {
idMatr: string;
minombre:string;
misede:string;
miprograma:string;
loading = false;
listmisPensiones: GesPensionModel[] = [];
modalref: NgbModalRef;
mipension:GesPensionlListModel=new GesPensionlListModel();

constructor(private router: Router,private modalService: NgbModal,
            private pensionservice: PensionService,private route: ActivatedRoute) {
            route.params.subscribe(
                data => {
                    this.idMatr = data.id;
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
  this.pensionservice.postBuscarPensionxParteIdDetalle(this.idMatr)
    .subscribe(res => {     
      console.log("Gaaaa",res);
      this.listmisPensiones = res;
      this.loading = false;
    });
}
btnAddPension() {
  const modalR = this.modalService.open(ModalAddPensionComponent, { size: 'lg'});
  (<ModalAddPensionComponent>(modalR.componentInstance)).enviarId(this.idMatr);
  modalR.result.then(result => {
    if (result) {
      this.listarPension();
    } else {
    }
  }).catch((res) => {});
}
editarPension(id: string) {
   //console.log(dni);
  this.pensionservice.postBuscarPensionxId(id)
    .subscribe(res => {
        //console.log("mi objeto es :",res);
      if (res.matid) {
        this.modalref = this.modalService.open(ModalAddPensionComponent, {size: 'lg'});
        (<ModalAddPensionComponent>(this.modalref.componentInstance)).iniciarFormulario(res,this.idMatr);
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

abrirPensionDetalles(idpago:string) {
  console.log("El Id del Pago",idpago);
  this.router.navigate(['/pages/ges-pension/detallepago/' + idpago]);
}

}
