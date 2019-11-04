import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {GesDocenteModel} from '../../../../models/ges-docente/ges-docente.model';
import {DocenteService} from '../../../../services/ges-docente/docente.service';

@Component({
  selector: 'ngx-modal-add-docente',
  styleUrls: ['./modal-add-docente.component.scss'],
  templateUrl: './modal-add-docente.component.html',
})
export class ModalAddDocenteComponent {
  formError = false;
  titulo = 'Agregar Docente';
  boton = 'Guardar';
  flagIsModificar = false;
  loadingGuardar = false;
  public myformdocente: FormGroup;
  docenteToSend: GesDocenteModel = new GesDocenteModel();
  constructor(private fb: FormBuilder,
              public activeModal: NgbActiveModal,
              private docenteservice: DocenteService) {
     this.myformdocente = this.fb.group({
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
    if (this.myformdocente.valid) {
      this.passFormToObject();
      this.loadingGuardar = true;
      if (this.flagIsModificar) {
        // console.log(this.docenteToSend);
        this.docenteservice.putModificarDocente(this.docenteToSend).subscribe(
          resp => {
            this.activeModal.close(true);
          },
          err => {
            console.log(err);
          });
      } else {
        this.docenteservice.postCrearDocente(this.docenteToSend).subscribe(
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
    this.docenteToSend.docdni = this.myformdocente.get('formdni').value;
    this.docenteToSend.doccorele = this.myformdocente.get('formcorreo').value;
    this.docenteToSend.docnom = this.myformdocente.get('formnombres').value;
    this.docenteToSend.docapepat = this.myformdocente.get('formapepat').value;
    this.docenteToSend.docapemat = this.myformdocente.get('formapemat').value;
    this.docenteToSend.docfecnac = this.myformdocente.get('formfecnac').value;
    this.docenteToSend.doctel = this.myformdocente.get('formtel').value;
    this.docenteToSend.docdir = this.myformdocente.get('formdir').value;
    this.docenteToSend.docnomusu = this.myformdocente.get('formnomusu').value;
    this.docenteToSend.doccon = this.myformdocente.get('formcont').value;
    this.docenteToSend.docestereg = this.myformdocente.get('formestreg').value;
  }
  iniciarFormulario(docente: GesDocenteModel) {
    this.flagIsModificar = true;
    this.titulo = 'Modificar Docente';
    this.boton = 'Modificar';
    this.myformdocente.controls['formdni'].setValue(docente.docdni);
    this.myformdocente.controls['formnombres'].setValue(docente.docnom);
    this.myformdocente.controls['formapepat'].setValue(docente.docapepat);
    this.myformdocente.controls['formapemat'].setValue(docente.docapemat);
    this.myformdocente.controls['formcorreo'].setValue(docente.doccorele);
    this.myformdocente.controls['formfecnac'].setValue(docente.docfecnac);
    this.myformdocente.controls['formtel'].setValue(docente.doctel);
    this.myformdocente.controls['formdir'].setValue(docente.docdir);
    this.myformdocente.controls['formnomusu'].setValue(docente.docnomusu);
    this.myformdocente.controls['formcont'].setValue(docente.doccon);
    this.myformdocente.controls['formestreg'].setValue(docente.docestereg);
  }
}
