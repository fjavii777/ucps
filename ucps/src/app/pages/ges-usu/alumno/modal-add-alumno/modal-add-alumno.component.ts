import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {GesUsuAlumnoModel} from '../../../../models/ges-usu/ges-usu-alumno.model';
import {AlumnoService} from '../../../../services/ges-usu/alumno.service';

@Component({
  selector: 'ngx-modal-add-alumno',
  styleUrls: ['./modal-add-alumno.component.scss'],
  templateUrl: './modal-add-alumno.component.html',
})
export class ModalAddAlumnoComponent {
  formError = false;
  titulo = 'Agregar Alumno';
  boton = 'Guardar';
  flagIsModificar = false;
  loadingGuardar = false;
  public myformalumnos: FormGroup;
  alumnoToSend: GesUsuAlumnoModel = new GesUsuAlumnoModel();
  constructor(private fb: FormBuilder,
              public activeModal: NgbActiveModal,
              private alumnoservice: AlumnoService) {
     this.myformalumnos = this.fb.group({
       formdni: [null, Validators.compose(
         [Validators.pattern('^(0|[1-9][0-9]*)$'),
           Validators.required])],
       formnombres: [null, Validators.compose(
         [Validators.pattern('[A-Za-z]{1,20}'),
           Validators.required])],
       formapepat: [null, Validators.compose(
         [Validators.pattern('[A-Za-z]{1,20}'),
           Validators.required])],
       formapemat: [null, Validators.compose(
         [Validators.pattern('[A-Za-z]{1,20}'),
           Validators.required])],
       formcui: [null, Validators.compose(
         [Validators.pattern('^(0|[1-9][0-9]*)$')])],
       formcorreo: [null, Validators.compose(
         [Validators.pattern('^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$'),
           Validators.required])],
       formfecnac: [null, Validators.required],
       formtel: [null, Validators.compose(
         [Validators.pattern('^(0|[1-9][0-9]*)$'),
           Validators.required])],
       formdir: [null, Validators.required],
       formnomusu: [null, Validators.required],
       formcont: [null, Validators.required],
       formestreg: ['A', Validators.required],
     });
  }
  btn_clickAceptar() {
    this.formError = false;
    if (this.myformalumnos.valid) {
      this.formError = false;
      this.passFormToObject();
      this.loadingGuardar = true;
      if (this.flagIsModificar) {
        this.alumnoservice.putModificarAlumno(this.alumnoToSend).subscribe(
          resp => {
            this.activeModal.close(true);
          },
          err => {
            this.activeModal.close(true);
            console.log(err);
          });
      } else {
        this.alumnoservice.postCrearAlumno(this.alumnoToSend).subscribe(
          resp => {
            this.activeModal.close(true);
          },
          err => {
            this.activeModal.close(true);
            console.log(err);
          });
      }
    } else {
      this.formError = true;
    }
  }
  passFormToObject() {
    this.alumnoToSend.aludni = this.myformalumnos.get('formdni').value;
    this.alumnoToSend.alunom = this.myformalumnos.get('formnombres').value;
    this.alumnoToSend.aluapepat = this.myformalumnos.get('formapepat').value;
    this.alumnoToSend.aluapemat = this.myformalumnos.get('formapemat').value;
    this.alumnoToSend.alucui = this.myformalumnos.get('formcui').value;
    this.alumnoToSend.alucorele = this.myformalumnos.get('formcorreo').value;
    this.alumnoToSend.alufecnac = this.myformalumnos.get('formfecnac').value;
    this.alumnoToSend.alutel = this.myformalumnos.get('formtel').value;
    this.alumnoToSend.aludir = this.myformalumnos.get('formdir').value;
    this.alumnoToSend.alunomusu = this.myformalumnos.get('formnomusu').value;
    this.alumnoToSend.alucon = this.myformalumnos.get('formcont').value;
    this.alumnoToSend.aluestreg = this.myformalumnos.get('formestreg').value;
  }
  iniciarFormulario(alumno: GesUsuAlumnoModel) {
    console.log('entro aca', alumno);
    this.flagIsModificar = true;
    this.titulo = 'Modificar Alumno';
    this.boton = 'Modificar';
    this.myformalumnos.controls['formdni'].setValue(alumno.aludni);
    this.myformalumnos.controls['formnombres'].setValue(alumno.alunom);
    this.myformalumnos.controls['formapepat'].setValue(alumno.aluapepat);
    this.myformalumnos.controls['formapemat'].setValue(alumno.aluapemat);
    this.myformalumnos.controls['formcui'].setValue(alumno.alucui);
    this.myformalumnos.controls['formcorreo'].setValue(alumno.alucorele);
    this.myformalumnos.controls['formfecnac'].setValue(alumno.alufecnac);
    this.myformalumnos.controls['formtel'].setValue(alumno.alutel);
    this.myformalumnos.controls['formdir'].setValue(alumno.aludir);
    this.myformalumnos.controls['formnomusu'].setValue(alumno.alunomusu);
    this.myformalumnos.controls['formcont'].setValue(alumno.alucon);
    this.myformalumnos.controls['formestreg'].setValue(alumno.aluestreg);
  }
}
