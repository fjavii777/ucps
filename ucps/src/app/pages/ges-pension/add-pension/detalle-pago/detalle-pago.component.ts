import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ModalAddPensionComponent} from '../modal-add-pension/modal-add-pension.component';
import {PensionService} from '../../../../services/ges-pensiones/ges-pensiones.service';
import {GesPensionlListModel} from '../../../../models/ges-pensiones/ges-pensiones-list.model';
import { ModalAddCuotaComponent } from '../modal-add-cuota/modal-add-cuota.component';
import { GesCuotasModel } from '../../../../models/ges-pensiones/ges-cuotas.model';


@Component({
  selector: 'ngx-detalle-pago',
  templateUrl: './detalle-pago.component.html',
  styleUrls: ['./detalle-pago.component.scss'],
})
export class DetallePagoComponent implements OnInit {
    idPago:any;
    listcuotas : GesCuotasModel[];
    loading = false;

constructor(private router: Router,private route: ActivatedRoute,private modalService: NgbModal
    ,private cuotasService: PensionService) {
    route.params.subscribe(
        data => {
            this.idPago = data.id;
        },
    );
}
ngOnInit(): void {
    this.listarCuotas();    
}
listarCuotas() {
    this.loading = true;
    this.cuotasService.postListarCuota(this.idPago)
      .subscribe(res => {     
        console.log("CuotasLista",res);
        this.listcuotas = res;
        this.loading = false;
      });
  }
btnAddCuota() {
    const modalR = this.modalService.open(ModalAddCuotaComponent, { size: 'lg'});
    (<ModalAddPensionComponent>(modalR.componentInstance)).enviarId(this.idPago);
    modalR.result.then(result => {
      if (result) {
        this.listarCuotas();   
      } else {
      }
    }).catch((res) => {});
  }

}
