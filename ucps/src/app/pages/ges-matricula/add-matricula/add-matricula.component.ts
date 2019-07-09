import {Component,OnInit} from '@angular/core';
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

@Component({
  selector: 'ngx-add-matricula',
  styleUrls: ['./add-matricula.component.scss'],
  templateUrl: './add-matricula.component.html',
})
export class AddMatriculaComponent implements OnInit {

  constructor() {

  }
  ngOnInit(): void {
  
  }
}




