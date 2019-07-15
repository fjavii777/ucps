import { NgModule } from '@angular/core';
import {ThemeModule} from '../../@theme/theme.module';
import { CommonModule } from '@angular/common';
import {NbActionsModule, NbDialogModule, NbWindowModule} from '@nebular/theme';
import {RouterModule, Routes} from '@angular/router';
import {UsuAlumnoComponent} from './alumno/usu-alumno.component';
import {GesUsuComponent} from './ges-usu.component';
import {ModalAddAlumnoComponent} from './alumno/modal-add-alumno/modal-add-alumno.component';
import {AlumnoService} from '../../services/ges-usu/alumno.service';
import {UtilsService} from '../../services/utils.service';
import {AlumnoEstadoPipe} from '../../pipes/ges-usu/alumno-estado.pipe';

const rutasgesusu: Routes = [{
  path: '',
  component: UsuAlumnoComponent,
  children: [
    {
      path: 'alumno',
      component: UsuAlumnoComponent,
    },
  ],
}];

@NgModule({
  declarations: [
    GesUsuComponent,
    UsuAlumnoComponent,
    ModalAddAlumnoComponent,
    AlumnoEstadoPipe,
  ],
  imports: [
    ThemeModule,
    CommonModule,
    NbActionsModule,
    RouterModule.forChild(rutasgesusu),
    NbDialogModule.forChild(),
    NbWindowModule.forChild(),
  ],
  entryComponents: [
    ModalAddAlumnoComponent,
  ],
  providers: [
    AlumnoService,
    UtilsService,
  ],
})
export class GesUsuModule { }
