import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {GesAdministrativoModel} from '../../../../models/ges-administrativo/ges-administrativo.model';
import {AdministrativoService} from '../../../../services/ges-administrativo/administrativo.service';

@Component({
  selector: 'ngx-modal-add-administrativo',
  styleUrls: ['./modal-add-administrativo.component.scss'],
  templateUrl: './modal-add-administrativo.component.html',
})
export class ModalAddAdministrativoComponent {
  formError = false;
  titulo = 'Agregar Administrativo';
  boton = 'Guardar';
  flagIsModificar = false;
  loadingGuardar = false;
  public myformadministrativo: FormGroup;
  administrativoToSend: GesAdministrativoModel = new GesAdministrativoModel();
  constructor(private fb: FormBuilder,
              public activeModal: NgbActiveModal,
              private administrativoeservice: AdministrativoService) {
     this.myformadministrativo = this.fb.group({
       formdni: [null, Validators.required],
       formnombres: [null, Validators.required],
       formapepat: [null, Validators.required],
       formapemat: [null, Validators.required],
       formcorreo: [null, Validators.required],
       formfecnac: [null, Validators.required],
       formtel: [null, Validators.required],
       formdir: [null, Validators.required],
       formnomusu: [null, Validators.required],
       formcont: [null, Validators.required],
       formestreg: ['A', Validators.required],
     });
  }
  btn_clickAceptar() {
    this.formError = false;
    if (this.myformadministrativo.valid) {
      this.passFormToObject();
      this.loadingGuardar = true;
      if (this.flagIsModificar) {
        this.administrativoeservice.putModificarAdministrativo(this.administrativoToSend).subscribe(
          resp => {
            this.activeModal.close(true);
          },
          err => {
            console.log(err);
          });
      } else {
        this.administrativoeservice.postCrearAdministrativo(this.administrativoToSend).subscribe(
          resp => {
            this.activeModal.close(true);
          },
          err => {
            console.log(err);
          });
      }
    } else {
      this.formError = true;
    }
  }
  passFormToObject() {
    this.administrativoToSend.admdni = this.myformadministrativo.get('formdni').value;
    this.administrativoToSend.admcorele = this.myformadministrativo.get('formcorreo').value;
    this.administrativoToSend.admnom = this.myformadministrativo.get('formnombres').value;
    this.administrativoToSend.admapepat = this.myformadministrativo.get('formapepat').value;
    this.administrativoToSend.admapemat = this.myformadministrativo.get('formapemat').value;
    this.administrativoToSend.admfecnac = this.myformadministrativo.get('formfecnac').value;
    this.administrativoToSend.admtel = this.myformadministrativo.get('formtel').value;
    this.administrativoToSend.admdir = this.myformadministrativo.get('formdir').value;
    this.administrativoToSend.admnomusu = this.myformadministrativo.get('formnomusu').value;
    this.administrativoToSend.admcon = this.myformadministrativo.get('formcont').value;
    this.administrativoToSend.admestreg = this.myformadministrativo.get('formestreg').value;
  }
  iniciarFormulario(admtvo: GesAdministrativoModel) {
    this.flagIsModificar = true;
    this.titulo = 'Modificar Administrativo';
    this.boton = 'Modificar';
    this.myformadministrativo.controls['formdni'].setValue(admtvo.admdni);
    this.myformadministrativo.controls['formnombres'].setValue(admtvo.admnom);
    this.myformadministrativo.controls['formapepat'].setValue(admtvo.admapepat);
    this.myformadministrativo.controls['formapemat'].setValue(admtvo.admapemat);
    this.myformadministrativo.controls['formcorreo'].setValue(admtvo.admcorele);
    this.myformadministrativo.controls['formfecnac'].setValue(admtvo.admfecnac);
    this.myformadministrativo.controls['formtel'].setValue(admtvo.admtel);
    this.myformadministrativo.controls['formdir'].setValue(admtvo.admdir);
    this.myformadministrativo.controls['formnomusu'].setValue(admtvo.admnomusu);
    this.myformadministrativo.controls['formcont'].setValue(admtvo.admcon);
    this.myformadministrativo.controls['formestreg'].setValue(admtvo.admestreg);
  }
}
