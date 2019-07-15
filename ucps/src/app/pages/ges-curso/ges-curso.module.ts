import {NgModule } from '@angular/core';
import {ThemeModule} from '../../@theme/theme.module';
import {CommonModule } from '@angular/common';
import {NbDialogModule, NbWindowModule,NbActionsModule } from '@nebular/theme';
import {RouterModule, Routes} from '@angular/router';
import {AddCursoComponent} from './add-curso/add-curso.component';
import {GesCursoComponent} from './ges-curso.component';


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
  ],
})
export class GesCursoModule { }
