import {NgModule } from '@angular/core';
import {ThemeModule} from '../../@theme/theme.module';
import {CommonModule } from '@angular/common';
import {NbDialogModule, NbWindowModule, NbActionsModule } from '@nebular/theme';
import {RouterModule, Routes} from '@angular/router';
import {AddCursoComponent} from './add-curso/add-curso.component';
import {GesCursoComponent} from './ges-curso.component';
import {ModalAddCursoComponent} from './add-curso/modal-add-curso/modal-add-curso.component';
import {UtilsService} from '../../services/utils.service';
import {CursoService} from '../../services/ges-curso/curso.service';
import {ProgramaService} from '../../services/ges-programa/programa.service';
import {AddProgramaComponent} from './add-programa/add-programa.component';
import {ModalAddProgComponent} from './add-programa/modal-add-prog/modal-add-prog.component';
import {SedeService} from '../../services/ges-sede/sede.service';


const rutasgesusu: Routes = [{
  path: '',
  component: GesCursoComponent,
  children: [
    {
      path: 'cursos',
      component: AddCursoComponent,
    },
    {
      path: 'programas',
      component: AddProgramaComponent,
    },
  ],
}];

@NgModule({
  declarations: [
    GesCursoComponent,
    AddCursoComponent,
    AddProgramaComponent,
    ModalAddCursoComponent,
    ModalAddProgComponent,
  ],
  imports: [
    ThemeModule,
    CommonModule,
    RouterModule.forChild(rutasgesusu),
    NbDialogModule.forChild(),
    NbWindowModule.forChild(),
    NbActionsModule,
  ],
  providers: [
    UtilsService,
    CursoService,
    ProgramaService,
    SedeService,
  ],
  entryComponents: [
    ModalAddCursoComponent,
    ModalAddProgComponent,
  ],
})
export class GesCursoModule { }
