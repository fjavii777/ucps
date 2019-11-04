import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {GesUsuAlumnoModel, GesUsuAlumnoModelSaveUpdate} from '../../../../models/ges-usu/ges-usu-alumno.model';
import {AlumnoService} from '../../../../services/ges-usu/alumno.service';

@Component({
  selector: 'ngx-modal-add-alumno',
  styleUrls: ['./modal-add-alumno.component.scss'],
  templateUrl: './modal-add-alumno.component.html',
})
export class ModalAddAlumnoComponent implements OnInit {
  formError = false;
  titulo = 'Agregar Alumno';
  boton = 'Guardar';
  flagIsModificar = false;
  loadingGuardar = false;
  public myformalumnos: FormGroup;
  alumnoToSend: GesUsuAlumnoModelSaveUpdate = new GesUsuAlumnoModelSaveUpdate();
  alumnoupdate: any;
  constructor(private fb: FormBuilder,
              public activeModal: NgbActiveModal,
              private alumnoservice: AlumnoService) {
  }
  ngOnInit(): void {
    if (this.flagIsModificar) {
      console.log('modifucar');
      this.iniciarFormUpdate();
      this.myformalumnos.controls['formdni'].setValue(this.alumnoupdate.aludni);
      this.myformalumnos.controls['formnombres'].setValue(this.alumnoupdate.alunom);
      this.myformalumnos.controls['formapepat'].setValue(this.alumnoupdate.aluapepat);
      this.myformalumnos.controls['formapemat'].setValue(this.alumnoupdate.aluapemat);
      this.myformalumnos.controls['formcorreo'].setValue(this.alumnoupdate.alucorele);
      this.myformalumnos.controls['formfecnac'].setValue(this.alumnoupdate.alufecnac);
      this.myformalumnos.controls['formtel'].setValue(this.alumnoupdate.alutel);
      this.myformalumnos.controls['formdir'].setValue(this.alumnoupdate.aludir);
      this.myformalumnos.controls['formnomusu'].setValue(this.alumnoupdate.alunomusu);
      this.myformalumnos.controls['formestreg'].setValue(this.alumnoupdate.aluestreg);
    } else {
      this.iniciarFormCreate();
      console.log('crear');
    }
  }

  iniciarFormCreate() {
    this.myformalumnos = this.fb.group({
      formdni: [null, Validators.compose(
        [Validators.pattern('^(0|[1-9][0-9]*)$'),
          Validators.required])],
      formnombres: [null, Validators.compose(
        [Validators.required])],
      formapepat: [null, Validators.compose(
        [Validators.required])],
      formapemat: [null, Validators.compose(
        [Validators.required])],
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
  iniciarFormUpdate() {
    this.myformalumnos = this.fb.group({
      formdni: [null, Validators.compose(
        [Validators.pattern('^(0|[1-9][0-9]*)$'),
          Validators.required])],
      formnombres: [null, Validators.compose(
        // Validators.pattern('[A-Za-z]{1,20}'),
        [Validators.required])],
      formapepat: [null, Validators.compose(
        [Validators.required])],
      formapemat: [null, Validators.compose(
        [Validators.required])],
      formcorreo: [null, Validators.compose(
        [Validators.pattern('^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$'),
          Validators.required])],
      formfecnac: [null, Validators.required],
      formtel: [null, Validators.compose(
        [Validators.pattern('^(0|[1-9][0-9]*)$'),
          Validators.required])],
      formdir: [null, Validators.required],
      formnomusu: [null, Validators.required],
      formestreg: ['A', Validators.required],
    });
  }
  btn_clickAceptar() {
    this.formError = false;
    console.log(this.myformalumnos.value);
    if (this.myformalumnos.valid) {
      this.formError = false;
      this.passFormToObject();
      this.loadingGuardar = true;
      if (this.flagIsModificar) { // MODIFICAR
        this.alumnoservice.putModificarAlumno(this.alumnoToSend).subscribe(
          resp => {
            this.activeModal.close(true);
          },
          err => {
            this.activeModal.close(true);
            console.log(err);
          });
      } else { // CREAR
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
    this.alumnoToSend.AlDni = this.myformalumnos.get('formdni').value;
    this.alumnoToSend.AlNom = this.myformalumnos.get('formnombres').value;
    this.alumnoToSend.AlApePat = this.myformalumnos.get('formapepat').value;
    this.alumnoToSend.AlApeMat = this.myformalumnos.get('formapemat').value;
    // this.alumnoToSend.AlCui = this.myformalumnos.get('formcui').value;
    this.alumnoToSend.AlCorEle = this.myformalumnos.get('formcorreo').value;
    this.alumnoToSend.AlFecNac = this.myformalumnos.get('formfecnac').value;
    this.alumnoToSend.AlTel = this.myformalumnos.get('formtel').value;
    this.alumnoToSend.AlDir = this.myformalumnos.get('formdir').value;
    this.alumnoToSend.AlNomUsu = this.myformalumnos.get('formnomusu').value;
    this.alumnoToSend.AlEstReg = this.myformalumnos.get('formestreg').value;
    if (!this.flagIsModificar) {
      this.alumnoToSend.AlCon = this.myformalumnos.get('formcont').value;
    }
  }
  iniciarFormulario(alumno: GesUsuAlumnoModel) {
    this.alumnoupdate = alumno;
    console.log('entro aca', alumno);
    this.flagIsModificar = true;
    this.titulo = 'Modificar Alumno';
    this.boton = 'Modificar';
  }
}
