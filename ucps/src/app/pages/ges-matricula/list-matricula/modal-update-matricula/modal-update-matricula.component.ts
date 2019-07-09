import {Component} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GesMatriculaListaProgramaModel} from '../../../../models/ges-matricula/ges-matricula-listaprograma.model';
import {GesMatriculaListaUpdateModel} from '../../../../models/ges-matricula/ges-matricula-update.model';
import {GesHorarioReadProgramaModel} from '../../../../models/ges-horario/ges-horario-read.model';
import { CurrencyIndex } from '@angular/common/src/i18n/locale_data';
import {MatriculaDetalleService} from '../../../../services/ges-matricula/matriculaDetalle.service';
@Component({
    selector: 'ngx-modal-update-matricula',
    styleUrls: ['./modal-update-matricula.component.scss'],
    templateUrl: './modal-update-matricula.component.html',
})
export class ModalUpdateMatriculaComponent {
    public myformmatricula: FormGroup;
    listaCursos:any[] = [];
    lisupdatePrograma:GesMatriculaListaUpdateModel = new GesMatriculaListaUpdateModel();
    listahorario:GesHorarioReadProgramaModel[] = [];
    miIdcurso:string;
    listaMatriculaAlumnoSeleccionado: GesMatriculaListaProgramaModel;
    nombrescompletos: string;
    horario: string;
    constructor(public activeModal: NgbActiveModal,
                private fb: FormBuilder,private matriculdetalleprogramaservice: MatriculaDetalleService) {
        this.myformmatricula = this.fb.group({
            formdni: [null, Validators.required],
            formmonto: [null, Validators.required],
            formcurso: [null, Validators.required],
            formhorario: [null, Validators.required],
            formnombrescompletos: [null, Validators.required],
            formtprograma: [null, Validators.required],
          });

          this.myformmatricula.controls['formcurso'].setValue("asdadasdasd");
        }
ngOnInit():void{
    
    
    //this.myformmatricula.get('formdni').value;
  //  this.myformmatricula.setValue(2);
//    console.log("Mi Horario es : ",this.listahorario);
    //console.log("Evuluo:",this.myformmatricula.get('formcurso').value);
}
btn_clickAceptar() {   

      this.lisupdatePrograma.matdetid ="5";
      this.lisupdatePrograma.matdetfkcur = this.myformmatricula.get('formcurso').value;
      this.lisupdatePrograma.matdetfkhor = this.myformmatricula.get('formhorario').value;      
      this.matriculdetalleprogramaservice.putModificarDetalle(this.lisupdatePrograma).subscribe(
        resp => {
          this.activeModal.close(true);
        },
        err => {
          console.log(err);
        });
    
  }
  
}

