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

@Component({
  selector: 'ngx-add-pension',
  styleUrls: ['./add-pension.component.scss'],
  templateUrl: './add-pension.component.html',
})
export class AddPensionComponent implements OnInit {
  
    loading = false;
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

    abrirDetallesPensiones(idcabecera: number,obj:GesPensionlListModel) {
        console.log("Estoy enviando",obj);
        var nombres=obj.alnom+" "+obj.alapepat+" "+obj.alpemat;
        var sede = obj.seddes;
        var programa = obj.pronom;
        this.router.navigate(['/pages/ges-pension/pensiondetalle/' + idcabecera+'/'+nombres+"/"+sede+"/"+programa]);
      }
    addPension(id: string) {       
            // this.modalref = this.modalService.open(ModalAddPensionComponent, {size: 'lg'});
            // (<ModalAddPensionComponent>(this.modalref.componentInstance)).iniciarFormulario(id);
            // this.modalref.result.then(result => {
            //   if (result) {
            //     this.listarPension();
            //   } else {
            //   }
            // }).catch((resp) => {});
           
       
    }

    editarPension(dni: string) {
        // console.log("Eentreeeeeeee");
        // console.log(dni);
    //   this.docenteservice.postBuscarDocentexId(dni)
    //     .subscribe(res => {
    //         console.log("mi objeto es :",res);
    //       if (res.docdni) {
    //         this.modalref = this.modalService.open(ModalAddDocenteComponent, {size: 'lg'});
    //         (<ModalAddDocenteComponent>(this.modalref.componentInstance)).iniciarFormulario(res);
    //         this.modalref.result.then(result => {
    //           if (result) {
    //             this.listarDocente();
    //           } else {
    //           }
    //         }).catch((resp) => {});
    //       } else {
    //         console.log('No existe alumno');
    //       }
    //     });
    }

}




