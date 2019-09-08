import { NgModule } from '@angular/core';
import {ThemeModule} from '../../@theme/theme.module';
import { CommonModule } from '@angular/common';
import {NbActionsModule, NbDialogModule, NbWindowModule} from '@nebular/theme';
import {RouterModule, Routes} from '@angular/router';
import {AddAsistenciaComponent} from './add-asistencia/add-asistencia.component';
import {GesAsistenciaComponent} from './ges-asistencia.component';
// import {ModalAddDocenteComponent} from './add-docente/modal-add-docente/modal-add-docente.component';
import {DocenteService} from '../../services/ges-docente/docente.service';
import {RadioButtonModule} from 'primeng/radiobutton';
import {UtilsService} from '../../services/utils.service';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {AsistenciaAlumnoComponent} from './add-asistencia/asistencia-alumno/asistencia-alumno.component';

const rutasgesusu: Routes = [{
  path: '',
  component: GesAsistenciaComponent,
  children: [
    {
      path: 'agregarasistencia',
      component: AddAsistenciaComponent,
    },
  ],
},{
    path: 'pensiondetalle/:id',
    component: AsistenciaAlumnoComponent,
  }
];

@NgModule({
  declarations: [
    GesAsistenciaComponent,
    AddAsistenciaComponent,
    AsistenciaAlumnoComponent,
    // AddDocenteComponent,
  ],
  imports: [
    ThemeModule,
    CommonModule,
    NbActionsModule,
    RouterModule.forChild(rutasgesusu),
    NbDialogModule.forChild(),
    NbWindowModule.forChild(),
    TableModule,
    CardModule,
    RadioButtonModule,
  ],
  entryComponents: [
    
    
  ],
  providers: [
    DocenteService,
    UtilsService,
  ],
})
export class GesAsistenciaModule { }
