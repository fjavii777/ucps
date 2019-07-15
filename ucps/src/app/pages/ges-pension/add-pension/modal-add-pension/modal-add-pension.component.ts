import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {GesPensionModel} from '../../../../models/ges-pensiones/ges-pensiones.model';
import {PensionService} from '../../../../services/ges-pensiones/ges-pensiones.service';

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
      formpagid: [null,Validators.required],
      formmatdetid:['B',Validators.required],
      formpagmes: [null, Validators.required],
      formpagnomban: [null, Validators.required],
      formpagcod: [null, Validators.required],
      formpagmon: [null, Validators.required],
      formpagestreg: ['A', Validators.required],

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
      //console.log(this.docenteToSend);
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
    this.pensionToSend.pagid = this.myformpension.get('formpagid').value;
    if(this.pensionToSend.matdetid !=null){
      this.pensionToSend.matdetid = this.myformpension.get('formmatdetid').value;
    } else {
      this.pensionToSend.matdetid = this.idDetalle
    }   
    this.pensionToSend.pagmes = this.myformpension.get('formpagmes').value;
    this.pensionToSend.pagnomban = this.myformpension.get('formpagnomban').value;
    this.pensionToSend.pagcod= this.myformpension.get('formpagcod').value;
    this.pensionToSend.pagmon = this.myformpension.get('formpagmon').value;
    this.pensionToSend.pagestreg = this.myformpension.get('formpagestreg').value;

  }
  iniciarFormulario(pension: GesPensionModel,idCabecera:string) {
    this.flagIsModificar = true;
    this.titulo = 'Modificar Pension';
    this.boton = 'Modificar';
    this.idDetalle=pension.matdetid;
    this.myformpension.controls['formpagid'].setValue(pension.pagid);
    this.myformpension.controls['formmatdetid'].setValue(pension.matdetid);
    this.myformpension.controls['formpagmes'].setValue(pension.pagmes);
    this.myformpension.controls['formpagnomban'].setValue(pension.pagnomban);
    this.myformpension.controls['formpagcod'].setValue(pension.pagcod);
    this.myformpension.controls['formpagmon'].setValue(pension.pagmon);
    this.myformpension.controls['formpagestreg'].setValue(pension.pagestreg);
    console.log(pension);
  }
}
