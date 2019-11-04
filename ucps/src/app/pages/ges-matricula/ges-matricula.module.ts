import {NgModule } from '@angular/core';
import {ThemeModule} from '../../@theme/theme.module';
import {CommonModule } from '@angular/common';
import {NbDialogModule, NbWindowModule, NbActionsModule, NbSelectModule, NbInputModule} from '@nebular/theme';
import {RouterModule, Routes} from '@angular/router';
import {AddMatriculaComponent} from './add-matricula/add-matricula.component';
import {GesMatriculaComponent} from './ges-matricula.component';
import {ListMatriculaComponent} from './list-matricula/list-matricula.component';
import {MatriculaDetalleService} from '../../services/ges-matricula/matriculaDetalle.service';
import {MatriculaListaProgramaService} from '../../services/ges-matricula/matriculaListaPrograma.service';
import {HorarioService} from '../../services/ges-horario/horario.service';
import {SedeService} from '../../services/ges-sede/sede.service';
import {UtilsService} from '../../services/utils.service';
import {Ng2SmartTableModule } from 'ng2-smart-table';
import {TableModule} from 'primeng/table';
import {ModalUpdateMatriculaComponent} from './list-matricula/modal-update-matricula/modal-update-matricula.component';
import {AlumnoService} from '../../services/ges-usu/alumno.service';
import {MatriculaV2Component} from './matricula-v2/matricula-v2.component';
import {MatDetalleComponent} from './matricula-v2/mat-detalle/mat-detalle.component';
import {ModalMatCabComponent} from './matricula-v2/modal-mat-cab/modal-mat-cab.component';
import {ProgramaService} from '../../services/ges-programa/programa.service';
import {MatriculaCabeceraService} from '../../services/ges-matricula/matriculaCabecera.service';
import {ModalDetCabComponent} from './matricula-v2/mat-detalle/modal-det-cab/modal-det-cab.component';
import {MatriculaEstadoPipe} from '../../pipes/get-mat/matricula-estado.pipe';
import {DocenteService} from '../../services/ges-docente/docente.service';
import {MatriculaService} from '../../services/ges-matricula/matricula.service';

const rutasgesusu: Routes = [{
  path: '',
  component: ListMatriculaComponent,
  children: [
    {
      path: 'matricula',
      component: ListMatriculaComponent,
    },
    {
      path: 'agregarmatricula',
      component: AddMatriculaComponent,
    },
    {
      path: 'listamatricula',
      component: ListMatriculaComponent,
    },
  ],
},
  {
    path: 'matriculadetalle/:id',
    component: MatDetalleComponent,
    // data: {modo: 2}
  }];

@NgModule({
  declarations: [
    GesMatriculaComponent,
    AddMatriculaComponent,
    ListMatriculaComponent,
    ModalUpdateMatriculaComponent,
    MatriculaV2Component,
    MatDetalleComponent,
    ModalMatCabComponent,
    ModalDetCabComponent,
    MatriculaEstadoPipe,
  ],
  imports: [
    ThemeModule,
    CommonModule,
    RouterModule.forChild(rutasgesusu),
    NbDialogModule.forChild(),
    NbWindowModule.forChild(),
  ],
  providers: [
    MatriculaDetalleService,
    MatriculaCabeceraService,
    MatriculaListaProgramaService,
    UtilsService,
    HorarioService,
    SedeService,
    AlumnoService,
    ProgramaService,
    DocenteService,
    MatriculaService,
  ],
  entryComponents: [
    ModalUpdateMatriculaComponent,
    ModalMatCabComponent,
    ModalDetCabComponent,
  ],

})
export class GesMatriculaModule { }
