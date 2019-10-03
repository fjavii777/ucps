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


const rutasgesusu: Routes = [{
  path: '',
  component: GesCursoComponent,
  children: [
    {
      path: 'agregarcurso',
      component: AddCursoComponent,
    },
  ],
}];

@NgModule({
  declarations: [
    GesCursoComponent,
    AddCursoComponent,
    ModalAddCursoComponent,
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
  ],
  entryComponents: [
    ModalAddCursoComponent,
  ],
})
export class GesCursoModule { }
