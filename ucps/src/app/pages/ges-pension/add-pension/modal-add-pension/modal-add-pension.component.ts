import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {GesPensionModel} from '../../../../models/ges-pensiones/ges-pensiones.model';
import {PensionService} from '../../../../services/ges-pensiones/ges-pensiones.service';
import { DebugContext } from '@angular/core/src/view';

@Component({
  selector: 'ngx-modal-add-pension',
  styleUrls: ['./modal-add-pension.component.scss'],
  templateUrl: './modal-add-pension.component.html',
})
export class ModalAddPensionComponent {

  listMes:any[];
  titulo = 'Agregar Pension';
  boton = 'Guardar';
  idDetalle:string;
  flagIsModificar = false;
  loadingGuardar = false;
  public myformpension: FormGroup;
  pensionToSend: GesPensionModel = new GesPensionModel();
  constructor(private fb: FormBuilder,
              public activeModal: NgbActiveModal,
              private pensionservice: PensionService) {
     
     this.myformpension = this.fb.group({
    
      formmat:[this.idDetalle,Validators.required],
      formfecpag: [null,Validators.required],
      formpagnomban: [null, Validators.required],
      formpagcod: [null, Validators.required],
      formpagmon: [null, Validators.required],      
      formpagtipo: [null,Validators.required],
      formpagestreg: ['A', Validators.required]
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
  enviarId(id:string){
    this.idDetalle=id;
    console.log("ID MATRICULA" ,this.idDetalle);
  }
  onSubmit(f) {
    console.log(f.value);
}
  myId(){
    return this.idDetalle;
  }
  btn_clickAceptar() {
    this.passFormToObject();
    this.loadingGuardar = true;
    if (this.flagIsModificar) {
    
      this.pensionservice.putModificarPension (this.pensionToSend).subscribe(
        resp => {
          this.activeModal.close(true);
        },
        err => {
          console.log(err);
        });
    } else {
      this.pensionservice.postCrearPension(this.pensionToSend).subscribe(
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
    
    if(this.pensionToSend.matid !=null){
      this.pensionToSend.matid = this.myformpension.get('formmat').value;
    } else {
      this.pensionToSend.matid = this.idDetalle
    }   
    this.pensionToSend.matid = this.idDetalle;
    this.pensionToSend.pagfec = this.myformpension.get('formfecpag').value;
    this.pensionToSend.pagnomban = this.myformpension.get('formpagnomban').value;
    this.pensionToSend.pagcod= this.myformpension.get('formpagcod').value;
    this.pensionToSend.pagmontot = this.myformpension.get('formpagmon').value;
    this.pensionToSend.pagtipo = this.myformpension.get('formpagtipo').value;    
    this.pensionToSend.pagestreg = this.myformpension.get('formpagestreg').value;
  }
  iniciarFormulario(pension: GesPensionModel,idCabecera:string) {
    this.flagIsModificar = true;
    this.titulo = 'Modificar Pension';
    this.boton = 'Modificar';
    this.idDetalle=pension.matid;
    this.myformpension.controls['formmat'].setValue(pension.matid);
    this.myformpension.controls['formfecpag'].setValue(pension.pagfec);
    this.myformpension.controls['formpagnomban'].setValue(pension.pagnomban);
    this.myformpension.controls['formpagcod'].setValue(pension.pagcod);
    this.myformpension.controls['formpagmon'].setValue(pension.pagmontot);
    this.myformpension.controls['formpagtip'].setValue(pension.pagtipo);
    this.myformpension.controls['formpagestreg'].setValue(pension.pagestreg);
    console.log(pension);
  }
}
