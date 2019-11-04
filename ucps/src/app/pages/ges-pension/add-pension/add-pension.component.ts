import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
import {UtilsService} from '../../../services/utils.service';
import {Observable} from 'rxjs';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {PensionListService} from '../../../services/ges-pensiones/ges-pensionesList.service';
import {GesPensionlListModel} from '../../../models/ges-pensiones/ges-pensiones-list.model';
import {ModalAddPensionComponent} from './modal-add-pension/modal-add-pension.component';
import {Router} from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import { GesUsuAlumnoModel } from '../../../models/ges-usu/ges-usu-alumno.model';

@Component({
  selector: 'ngx-add-pension',
  styleUrls: ['./add-pension.component.scss'],
  templateUrl: './add-pension.component.html',
})
export class AddPensionComponent implements OnInit {
    inputBuscar = '';
    loading = false;
    listAlumno : GesUsuAlumnoModel[]=[]; 
    listPension: GesPensionlListModel[] = [];
    modalref: NgbModalRef;

    constructor(private router: Router,private modalService: NgbModal,
                private pensionListservice: PensionListService) {
    }
    ngOnInit(): void {
      this.listarPension();
    }
    listarPension() {
      this.loading = true;
      this.pensionListservice.getListarPensionList()
        .subscribe(res => {
          this.listPension = res;
          this.loading = false;
        });
    }
    btnAddPension() {
      const modalR = this.modalService.open(ModalAddPensionComponent, { size: 'lg'});
      modalR.result.then(result => {
        if (result) {
          this.listarPension();
        } else {
        }
      }).catch((res) => {});
    }
    listarPensionesxDni(dni: string) {
      this.loading = true;
      this.pensionListservice.getListarPensionxDNIFiltro(dni)
        .subscribe(res => {
          this.listPension = res;
          this.loading = false;
        });
    }

    abrirDetallesPensiones(idMatr: number,obj:GesPensionlListModel) {
        var nombres=obj.alunom +" "+obj.aluapepat+" "+obj.aluapemat;
        var matri = obj.matid;
        var sede = obj.seddes;
        var programa = obj.pronom;
        this.router.navigate(['/pages/ges-pension/pensiondetalle/' + idMatr+'/'+nombres+"/"+sede+"/"+programa]);
      }
    addPension(id: string) {       
     
       
    }

    editarPension(dni: string) {
    }

}




