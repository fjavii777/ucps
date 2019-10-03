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
      matid: null,
      aludni: [null, Validators.required],
      sedid: [null, Validators.required],
      procurid: [null, Validators.required],
      admdni: [null, Validators.required],
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
      this.loadingGuardar = true;
      if (this.flagIsModificar) { // Modificar
        this.matriculaService.putUpdateMatricula(this.myformmatricula.value).subscribe(
          resp => {
            this.activeModal.close(true);
          },
          err => {
            console.log(err);
          });
      } else { // Crear
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
  iniciarFormulario(data: any) {
    this.flagIsModificar = true;
    this.titulo = 'Modificar Matricula';
    this.boton = 'Modificar';
    this.myformmatricula.controls['matid'].setValue(data.matid);
    this.myformmatricula.controls['aludni'].setValue(data.aludni);
    this.myformmatricula.controls['sedid'].setValue(data.sedid);
    this.myformmatricula.controls['procurid'].setValue(data.procurid);
    this.myformmatricula.controls['admdni'].setValue(data.admdni);
    this.myformmatricula.controls['matnomban'].setValue(data.matnomban);
    this.myformmatricula.controls['matcodpag'].setValue(data.matcodpag);
    this.myformmatricula.controls['matmonpag'].setValue(data.matmonpag);
    this.myformmatricula.controls['matfec'].setValue(data.matfec);
    this.myformmatricula.controls['matobs'].setValue(data.matobs);
    this.myformmatricula.controls['matestreg'].setValue(data.matestreg);
  }
}

