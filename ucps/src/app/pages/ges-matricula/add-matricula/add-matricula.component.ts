import {Component, OnInit} from '@angular/core';
import {GesSedeModel} from '../../../models/ges-sede/ges-sede.model';
import {SedeService} from '../../../services/ges-sede/sede.service';
import {HorarioService} from '../../../services/ges-horario/horario.service';
import {GesHorarioReadProgramaModel} from '../../../models/ges-horario/ges-horario-read.model';
import {CursoService} from '../../../services/ges-curso/curso.service';
import {GesCursoReadModel} from '../../../models/ges-curso/ges-curso-read.model';
import {GesMatriculaCabeceraModel} from '../../../models/ges-matricula/ges-matricula-cabecera.model';
import {MatriculaCabeceraService} from '../../../services/ges-matricula/matriculaCabecera.service';
import {GesMatriculaDetalleModel} from '../../../models/ges-matricula/ges-matricula-detalle.model';
import {MatriculaDetalleService} from '../../../services/ges-matricula/matriculaDetalle.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {UtilsService} from '../../../services/utils.service';
import {Observable} from 'rxjs';
import {AlumnoService} from '../../../services/ges-usu/alumno.service';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'ngx-add-matricula',
  styleUrls: ['./add-matricula.component.scss'],
  templateUrl: './add-matricula.component.html',
})
export class AddMatriculaComponent implements OnInit {
  public myformmatricula: FormGroup;

  constructor(private fb: FormBuilder,
              private utilService: UtilsService,
              private alumnoService: AlumnoService) {
    this.myformmatricula = this.fb.group({
      formsede: [null, Validators.required],
      formprograma: [null, Validators.required],
      formhorario: [null, Validators.required],
      formIdEstudiante: [null, Validators.required],
      formfecha: [{value: this.utilService.getDateNow(), disabled: true}],
      formBanco: [null, Validators.required],
      formTransaccion: [null, Validators.required],
      formMonDep: [null, Validators.required],
      formObservaciones: [null, Validators.required],
    });
  }
  ngOnInit(): void {
  }
  guardar() {
    console.log(this.myformmatricula.get('formIdEstudiante').value.AlDni);
  }
  searchAlumnoXdni = (text$: Observable<string>) => {
    return text$.filter((t: string) => t.length > 1)
      .debounceTime(200)
      .switchMap((text: string) => {
        const dni = text;
        return this.alumnoService.postBuscarAlumnoxParteId(dni);
      });
  }
  formatearEntradaAlumnoXdni = (result: any) =>
    result.AlDni + ' - ' +
    result.AlApePat + ' ' +
    result.AlApeMat + ' ' +
    result.AlNom
}




