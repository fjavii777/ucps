import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { PensionService } from '../../../../services/ges-pensiones/ges-pensiones.service';
import { GesCuotasModel } from '../../../../models/ges-pensiones/ges-cuotas.model';
import { GesCuotaModel } from '../../../../models/ges-pensiones/ges-cuota.model';


@Component({
  selector: 'ngx-modal-add-cuota',
  styleUrls: ['./modal-add-cuota.component.scss'],
  templateUrl: './modal-add-cuota.component.html',
})
export class ModalAddCuotaComponent {

  listMes:any[];
  titulo = 'Agregar Pension';
  boton = 'Guardar';
  idPago:string;
  flagIsModificar = false;
  loadingGuardar = false;
  public myformpension: FormGroup;
  pensionToSend: GesCuotaModel = new GesCuotaModel();
 
  constructor(private fb: FormBuilder,
              public activeModal: NgbActiveModal,private crearCuotaService :PensionService) {
     
     this.myformpension = this.fb.group({
    
      formcuent: [null, Validators.required],
      formfecpag: [null,Validators.required],
      formpagid : [null,Validators.required],
      formpagmon: [null, Validators.required],
      formcuoreg: ['A', Validators.required]
     });
     this.listMes = [
      { id: 'ENERO', nombreMes: 'ENERO' },
      { id: 'FEBRERO', nombreMes: 'FEBRERO' },
      { id: 'MARZO', nombreMes: 'MARZO' },
      { id: 'ABRIL', nombreMes: 'ABRIL ' },
      { id: 'MAYO', nombreMes: 'MAYO ' },
      { id: 'JUNIO', nombreMes: 'JUNIO ' },
      { id: 'JULIO', nombreMes: 'JULIO ' },
      { id: 'AGOSTO', nombreMes: 'AGOSTO ' },
      { id: 'SETIEMBRE', nombreMes: 'SETIEMBRE ' },
      { id: 'OCTUBRE', nombreMes: 'OCTUBRE ' },
      { id: 'NOVIEMBRE', nombreMes: 'NOVIEMBRE ' },
      { id: 'DICIEMBRE', nombreMes: 'DICIEMBRE ' },
      ];
  }

  btn_clickAceptar() {
    this.passFormToObject();
    this.loadingGuardar = true;
    if (this.flagIsModificar) {
    
    //   this.crearCuotaService.putModificarPension (this.pensionToSend).subscribe(
    //     resp => {
    //       this.activeModal.close(true);
    //     },
    //     err => {
    //       console.log(err);
    //     });
    } else {
      this.crearCuotaService.postCrearCuota(this.pensionToSend).subscribe(
        resp => {
          this.activeModal.close(true);
        },
        err => {
          console.log(err);
        });
    }
  }
  passFormToObject() {
    //this.pensionToSend.pagid = this.myformpension.get('formpagid').value;
    
    // if(this.pensionToSend.pagid !=null){
    //   this.pensionToSend.pagid = this.idPago;
    // } else {
    //   this.pensionToSend.pagid = this.pagid
    // }   
    
    this.pensionToSend.cunumero = this.myformpension.get('formcuent').value;
    this.pensionToSend.cufec = this.myformpension.get('formfecpag').value;
    this.pensionToSend.pagid = this.myId();
    this.pensionToSend.cumon = this.myformpension.get('formpagmon').value;
    this.pensionToSend.cuestreg= this.myformpension.get('formcuoreg').value;

  }
  iniciarFormulario(cuotas: GesCuotasModel,idCabecera:string) {
    this.flagIsModificar = true;
    this.titulo = 'Modificar Pension';
    this.boton = 'Modificar';
    // this.idDetalle=cuotas.pagid;
    this.pensionToSend.cunumero = this.myformpension.get('formcuent').value;
    this.pensionToSend.cufec = this.myformpension.get('formfecpag').value;
    this.pensionToSend.pagid = this.myId();
    this.pensionToSend.cumon = this.myformpension.get('formpagmon').value;
    this.pensionToSend.cuestreg= this.myformpension.get('formcuoreg').value;
  
  }

  enviarId(id:string){
    this.idPago=id;
    console.log("Llego",this.idPago);
  }
  onSubmit(f) {
    console.log(f.value);
}
  myId(){
    return this.idPago;
  }
}
