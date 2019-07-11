import {Component} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GesMatriculaListaProgramaModel} from '../../../../models/ges-matricula/ges-matricula-listaprograma.model';
import {GesMatriculaListaUpdateModel} from '../../../../models/ges-matricula/ges-matricula-update.model';
import {GesHorarioReadProgramaModel} from '../../../../models/ges-horario/ges-horario-read.model';
import { CurrencyIndex } from '@angular/common/src/i18n/locale_data';
import {MatriculaDetalleService} from '../../../../services/ges-matricula/matriculaDetalle.service';
import { GesMatriculaDetalleModel } from '../../../../models/ges-matricula/ges-matricula-detalle.model';
@Component({
    selector: 'ngx-modal-update-matricula',
    styleUrls: ['./modal-update-matricula.component.scss'],
    templateUrl: './modal-update-matricula.component.html',
})
export class ModalUpdateMatriculaComponent {
    titulo = 'Actualizar Matricula';
    public myformmatricula: FormGroup;
    listaCursos:any[] = [];
    programaToSend:GesMatriculaListaUpdateModel = new GesMatriculaListaUpdateModel();
    listahorario:GesHorarioReadProgramaModel[] = [];
    listaMatriculaAlumnoSeleccionado: GesMatriculaListaProgramaModel;
    nombrescompletos: string;
    loadingGuardar = false;
    horario: string;
    loading = false;
    constructor(public activeModal: NgbActiveModal,
                private fb: FormBuilder,private matriculdetalleprogramaservice: MatriculaDetalleService) {
        this.myformmatricula = this.fb.group({
            formdeid: [null, Validators.required],
            formdni: [null, Validators.required],
            formmonto: [null, Validators.required],
            formcurso: [null, Validators.required],
            formhorario: [null, Validators.required],
            formnombrescompletos: [null, Validators.required],
            formtprograma: [null, Validators.required],
          });
        }

btn_clickAceptar() {   
      
      this.passFormToObject();
      this.loadingGuardar = true;
      this.matriculdetalleprogramaservice.putModificarDetalle(this.programaToSend).subscribe(
        resp => {
          this.activeModal.close(true);
        },
        err => {
          console.log(err);
        });
    
  }
  passFormToObject() {
    this.programaToSend.matdetid= this.myformmatricula.get('formdeid').value;
    this.programaToSend.matdetfkcur= this.myformmatricula.get('formcurso').value;
    this.programaToSend.matdetfkhor = this.myformmatricula.get('formhorario').value;
  }
  iniciarFormulario(alumnodetalle: GesMatriculaListaProgramaModel) {
    console.log("Este es ",alumnodetalle.MatDetId);
    this.myformmatricula.controls['formdeid'].setValue(alumnodetalle.MatDetId);
  }
}

