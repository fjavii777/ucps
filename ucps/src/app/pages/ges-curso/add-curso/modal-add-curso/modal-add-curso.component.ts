import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {GesAdministrativoModel} from '../../../../models/ges-administrativo/ges-administrativo.model';
import {CursoService} from '../../../../services/ges-curso/curso.service';

@Component({
  selector: 'ngx-modal-add-curso',
  styleUrls: ['./modal-add-curso.component.scss'],
  templateUrl: './modal-add-curso.component.html',
})
export class ModalAddCursoComponent {
  formError = false;
  titulo = 'Agregar Curso';
  boton = 'Guardar';
  flagIsModificar = false;
  loadingGuardar = false;
  public myformadministrativo: FormGroup;
  administrativoToSend: GesAdministrativoModel = new GesAdministrativoModel();
  constructor(private fb: FormBuilder,
              private cursoService: CursoService,
              public activeModal: NgbActiveModal) {
    this.myformadministrativo = this.fb.group({
      curid: null,
      curnom: [null, Validators.required],
      curcod: [null, Validators.required],
      tipcurid: [null, Validators.required],
      curestreg: ['A', Validators.required],
    });
  }
  btn_clickAceptar() {
    this.formError = false;
    if (this.myformadministrativo.valid) {
      // this.passFormToObject();
      this.loadingGuardar = true;
      console.log('to send', this.myformadministrativo.value);
      if (this.flagIsModificar) {
        this.cursoService.putUpdateurso(this.myformadministrativo.value).subscribe(
          resp => {
            this.activeModal.close(true);
          },
          err => {
            console.log(err);
          });
      } else {
        this.cursoService.postcreateCurso(this.myformadministrativo.value).subscribe(
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
  //   this.administrativoToSend.admdni = this.myformadministrativo.get('formdni').value;
  //   this.administrativoToSend.admcorele = this.myformadministrativo.get('formcorreo').value;
  //   this.administrativoToSend.admnom = this.myformadministrativo.get('formnombres').value;
  //   this.administrativoToSend.admapepat = this.myformadministrativo.get('formapepat').value;
  //   this.administrativoToSend.admapemat = this.myformadministrativo.get('formapemat').value;
  //   this.administrativoToSend.admfecnac = this.myformadministrativo.get('formfecnac').value;
  //   this.administrativoToSend.admtel = this.myformadministrativo.get('formtel').value;
  //   this.administrativoToSend.admdir = this.myformadministrativo.get('formdir').value;
  //   this.administrativoToSend.admnomusu = this.myformadministrativo.get('formnomusu').value;
  //   this.administrativoToSend.admcon = this.myformadministrativo.get('formcont').value;
  //   this.administrativoToSend.admestreg = this.myformadministrativo.get('formestreg').value;
  // }
  iniciarFormulario(curso) {
    this.flagIsModificar = true;
    this.titulo = 'Modificar Curso';
    this.boton = 'Modificar';
    this.myformadministrativo.controls['curid'].setValue(curso.curid);
    this.myformadministrativo.controls['curnom'].setValue(curso.curnom);
    this.myformadministrativo.controls['curcod'].setValue(curso.curcod);
    this.myformadministrativo.controls['tipcurid'].setValue(curso.tipcurid);
    this.myformadministrativo.controls['curestreg'].setValue(curso.curestreg);
  }
}
