import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {GesAdministrativoModel} from '../../../../models/ges-administrativo/ges-administrativo.model';
import {CursoService} from '../../../../services/ges-curso/curso.service';
import {ProgramaService} from '../../../../services/ges-programa/programa.service';

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
  cbProgramas: any;
  public myformadministrativo: FormGroup;
  administrativoToSend: GesAdministrativoModel = new GesAdministrativoModel();
  constructor(private fb: FormBuilder,
              private programaService: ProgramaService,
              private cursoService: CursoService,
              public activeModal: NgbActiveModal) {
    this.myformadministrativo = this.fb.group({
      curid: null,
      curnom: [null, Validators.required],
      curcod: [null, Validators.required],
      tipcurid: [null, Validators.required],
      proid: [null, Validators.required],
      curestreg: ['A', Validators.required],
    });
    this.listcbProgramas();
  }
  listcbProgramas() {
    this.programaService.getListarProgramas().subscribe(
      resp => {
        this.cbProgramas = resp;
      },
      err => {
        console.log(err);
      });
  }
  btn_clickAceptar() {
    this.formError = false;
    if (this.myformadministrativo.valid) {
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
  iniciarFormulario(curso) {
    this.flagIsModificar = true;
    this.titulo = 'Modificar Curso';
    this.boton = 'Modificar';
    this.myformadministrativo.controls['curid'].setValue(curso.curid);
    this.myformadministrativo.controls['curnom'].setValue(curso.curnom);
    this.myformadministrativo.controls['curcod'].setValue(curso.curcod);
    this.myformadministrativo.controls['tipcurid'].setValue(curso.tipcurid);
    this.myformadministrativo.controls['proid'].setValue(curso.proid);
    this.myformadministrativo.controls['curestreg'].setValue(curso.curestreg);
  }
}
