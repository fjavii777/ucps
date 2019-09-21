import {NgModule } from '@angular/core';
import {ThemeModule} from '../../@theme/theme.module';
import {CommonModule } from '@angular/common';
import {NbDialogModule, NbWindowModule,NbActionsModule } from '@nebular/theme';
import {RouterModule, Routes} from '@angular/router';
import {ViewHorarioComponent} from './view-horario/view-horario.component';
import {GesHorarioComponent} from './ges-horario.component';


const rutasgesusu: Routes = [{
  path: '',
  component: GesHorarioComponent,
  children: [
    {
      path: 'agregarhorario',
      component: ViewHorarioComponent,
    },
  ],
}];

@NgModule({
  declarations: [
    GesHorarioComponent,
    ViewHorarioComponent,
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
export class GesHorarioModule { }
