import { NgModule } from '@angular/core';
import {ThemeModule} from '../../@theme/theme.module';
import { CommonModule } from '@angular/common';
import {NbActionsModule, NbDialogModule, NbWindowModule} from '@nebular/theme';
import {RouterModule, Routes} from '@angular/router';
import {ListCursoComponent} from './list-curso/list-curso.component';
import {GesNotaComponent} from './ges-nota.component';
// import {ModalAddDocenteComponent} from './add-docente/modal-add-docente/modal-add-docente.component';
//import {DocenteService} from '../../services/ges-docente/docente.service';
import {RadioButtonModule} from 'primeng/radiobutton';
import {UtilsService} from '../../services/utils.service';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {NotaAlumnoComponent} from './list-curso/nota-alumno/nota-alumno.component';
import {NotasFinalesComponent} from './notas-finales/notas-finales.component';
import { DocenteListCursosService } from '../../services/ges-notas/docente-listcursos.service';
import { AlumnoListNotasService } from '../../services/ges-notas/alumno-listnotas.service';

const rutasgesusu: Routes = [{
  path: '',
  component: GesNotaComponent,
  children: [
    {
      path: 'listacursos',
      component: ListCursoComponent,
    },
  ],
},{
    path: 'curso/:curid/:tipnottipo',
    component: NotaAlumnoComponent,
  },
  {
    path: 'notasfinales',
    component: NotasFinalesComponent,
  }
];

@NgModule({
  declarations: [
    GesNotaComponent,
    ListCursoComponent,
    NotaAlumnoComponent,
    NotasFinalesComponent,
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
    //DocenteService,
    UtilsService,
    DocenteListCursosService,
    AlumnoListNotasService,

  ],
})
export class GesNotaModule { }
