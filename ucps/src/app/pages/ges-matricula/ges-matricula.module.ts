import { NgModule } from '@angular/core';
import {ThemeModule} from '../../@theme/theme.module';
import { CommonModule } from '@angular/common';
import { NbDialogModule, NbWindowModule } from '@nebular/theme';
import {RouterModule, Routes} from '@angular/router';
import {AddMatriculaComponent} from './add-matricula/add-matricula.component';
import {GesMatriculaComponent} from './ges-matricula.component';
import {ListMatriculaComponent} from './list-matricula/list-matricula.component';
import {MatriculaDetalleService} from '../../services/ges-matricula/matriculaDetalle.service';
import {MatriculaListaProgramaService} from '../../services/ges-matricula/matriculaListaPrograma.service';
import {CursoService} from '../../services/ges-curso/curso.service';
import {HorarioService} from '../../services/ges-horario/horario.service';
import {SedeService} from '../../services/ges-sede/sede.service';
import {UtilsService} from '../../services/utils.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {TableModule} from 'primeng/table';
import {ModalUpdateMatriculaComponent} from './list-matricula/modal-update-matricula/modal-update-matricula.component';

const rutasgesusu: Routes = [{
  path: '',
  component: GesMatriculaComponent,
  children: [
    {
      path: 'agregarmatricula',
      component: AddMatriculaComponent,
    },
    {
      path: 'listamatricula',
      component: ListMatriculaComponent,
    },
  ],
}];

@NgModule({
  declarations: [
    GesMatriculaComponent,
    AddMatriculaComponent,
    ListMatriculaComponent,
    ModalUpdateMatriculaComponent,
  ],
  imports: [
    ThemeModule,
    CommonModule,
    RouterModule.forChild(rutasgesusu),
    NbDialogModule.forChild(),
    NbWindowModule.forChild(),
    Ng2SmartTableModule,
    TableModule,
  ],
  providers: [
    MatriculaDetalleService,
    MatriculaListaProgramaService,
    CursoService,
    UtilsService,
    HorarioService,
    SedeService,
  ],
  entryComponents: [
    ModalUpdateMatriculaComponent,
  ],

})
export class GesMatriculaModule { }
