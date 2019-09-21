import {Component} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GesDocenteModel} from '../../../../models/ges-docente/ges-docente.model';
import {DocenteService} from '../../../../services/ges-docente/docente.service';
import {MatriculaService} from '../../../../services/ges-matricula/matricula.service';
@Component({
    selector: 'ngx-modal-update-matricula',
    styleUrls: ['./modal-update-matricula.component.scss'],
    templateUrl: './modal-update-matricula.component.html',
})
export class ModalUpdateMatriculaComponent {
  formError = false;
  titulo = 'Agregar Matricula';
  boton = 'Guardar';
  flagIsModificar = false;
  loadingGuardar = false;
  public myformmatricula: FormGroup;
  docenteToSend: GesDocenteModel = new GesDocenteModel();
  constructor(private fb: FormBuilder,
              public activeModal: NgbActiveModal,
              private matriculaService: MatriculaService,
              private docenteservice: DocenteService) {
    this.myformmatricula = this.fb.group({
      aludni: [null, Validators.required],
      sedid: [null, Validators.required],
      proid: [null, Validators.required],
      horid: [null, Validators.required],
      matnomban: [null, Validators.required],
      matcodpag: [null, Validators.required],
      matmonpag: [null, Validators.compose([Validators.min(1), Validators.required])],
      matfec: [null, Validators.required],
      matobs: [''],
      matestreg: ['A', Validators.required],
    });
  }
  btn_clickAceptar() {
    this.formError = false;
    console.log(this.myformmatricula.value);
    if (this.myformmatricula.valid) {
      // this.passFormToObject();
      this.loadingGuardar = true;
      if (this.flagIsModificar) {
        this.docenteservice.putModificarDocente(this.docenteToSend).subscribe(
          resp => {
            this.activeModal.close(true);
          },
          err => {
            console.log(err);
          });
      } else {
        this.matriculaService.postSaveMatricula(this.myformmatricula.value).subscribe(
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
  // passFormToObject() {
  //   this.docenteToSend.docdni = this.myformmatricula.get('formdni').value;
  //   this.docenteToSend.doccorele = this.myformmatricula.get('formcorreo').value;
  //   this.docenteToSend.docnom = this.myformmatricula.get('formnombres').value;
  //   this.docenteToSend.docapepat = this.myformmatricula.get('formapepat').value;
  //   this.docenteToSend.docpemat = this.myformmatricula.get('formapemat').value;
  //   this.docenteToSend.docfecnac = this.myformmatricula.get('formfecnac').value;
  //   this.docenteToSend.doctel = this.myformmatricula.get('formtel').value;
  //   this.docenteToSend.docdir = this.myformmatricula.get('formdir').value;
  //   this.docenteToSend.docnomusu = this.myformmatricula.get('formnomusu').value;
  //   this.docenteToSend.doccon = this.myformmatricula.get('formcont').value;
  //   this.docenteToSend.docestereg = this.myformmatricula.get('formestreg').value;
  // }
  iniciarFormulario(docente: GesDocenteModel) {
    this.flagIsModificar = true;
    this.titulo = 'Modificar Docente';
    this.boton = 'Modificar';
    this.myformmatricula.controls['formdni'].setValue(docente.docdni);
    this.myformmatricula.controls['formnombres'].setValue(docente.docnom);
    this.myformmatricula.controls['formapepat'].setValue(docente.docapepat);
    this.myformmatricula.controls['formapemat'].setValue(docente.docpemat);
    this.myformmatricula.controls['formcorreo'].setValue(docente.doccorele);
    this.myformmatricula.controls['formfecnac'].setValue(docente.docfecnac);
    this.myformmatricula.controls['formtel'].setValue(docente.doctel);
    this.myformmatricula.controls['formdir'].setValue(docente.docdir);
    this.myformmatricula.controls['formnomusu'].setValue(docente.docnomusu);
    this.myformmatricula.controls['formcont'].setValue(docente.doccon);
    this.myformmatricula.controls['formestreg'].setValue(docente.docestereg);
  }
}

