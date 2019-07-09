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
       formdni: [null, Validators.required],
       formnombres: [null, Validators.required],
       formapepat: [null, Validators.required],
       formapemat: [null, Validators.required],
       formcui: [null, Validators.required],
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
    this.passFormToObject();
    this.loadingGuardar = true;
    if (this.flagIsModificar) {
      this.alumnoservice.putModificarAlumno(this.alumnoToSend).subscribe(
        resp => {
          this.activeModal.close(true);
        },
        err => {
          console.log(err);
        });
    } else {
      this.alumnoservice.postCrearAlumno(this.alumnoToSend).subscribe(
        resp => {
          this.activeModal.close(true);
        },
        err => {
          console.log(err);
        });
    }
  }
  passFormToObject() {
    this.alumnoToSend.AlDni = this.myformalumnos.get('formdni').value;
    this.alumnoToSend.AlNom = this.myformalumnos.get('formnombres').value;
    this.alumnoToSend.AlApePat = this.myformalumnos.get('formapepat').value;
    this.alumnoToSend.AlApeMat = this.myformalumnos.get('formapemat').value;
    this.alumnoToSend.AlCui = this.myformalumnos.get('formcui').value;
    this.alumnoToSend.AlCorEle = this.myformalumnos.get('formcorreo').value;
    this.alumnoToSend.AlFecNac = this.myformalumnos.get('formfecnac').value;
    this.alumnoToSend.AlTel = this.myformalumnos.get('formtel').value;
    this.alumnoToSend.AlDir = this.myformalumnos.get('formdir').value;
    this.alumnoToSend.AlNomUsu = this.myformalumnos.get('formnomusu').value;
    this.alumnoToSend.AlCon = this.myformalumnos.get('formcont').value;
    this.alumnoToSend.AlEstReg = this.myformalumnos.get('formestreg').value;
  }
  iniciarFormulario(alumno: GesUsuAlumnoModel) {
    this.flagIsModificar = true;
    this.titulo = 'Modificar Alumno';
    this.boton = 'Modificar';
    this.myformalumnos.controls['formdni'].setValue(alumno.AlDni);
    this.myformalumnos.controls['formnombres'].setValue(alumno.AlNom);
    this.myformalumnos.controls['formapepat'].setValue(alumno.AlApePat);
    this.myformalumnos.controls['formapemat'].setValue(alumno.AlApeMat);
    this.myformalumnos.controls['formcui'].setValue(alumno.AlCui);
    this.myformalumnos.controls['formcorreo'].setValue(alumno.AlCorEle);
    this.myformalumnos.controls['formfecnac'].setValue(alumno.AlFecNac);
    this.myformalumnos.controls['formtel'].setValue(alumno.AlTel);
    this.myformalumnos.controls['formdir'].setValue(alumno.AlDir);
    this.myformalumnos.controls['formnomusu'].setValue(alumno.AlNomUsu);
    this.myformalumnos.controls['formcont'].setValue(alumno.AlCon);
    this.myformalumnos.controls['formestreg'].setValue(alumno.AlEstReg);
  }
}
