import { NgModule } from '@angular/core';
import {ThemeModule} from '../../@theme/theme.module';
import { CommonModule } from '@angular/common';
import {NbActionsModule, NbDialogModule, NbWindowModule} from '@nebular/theme';
import {RouterModule, Routes} from '@angular/router';
import {AddDocenteComponent} from './add-docente/add-docente.component';
import {GesDocenteComponent} from './ges-docente.component';
import {ModalAddDocenteComponent} from './add-docente/modal-add-docente/modal-add-docente.component';
import {DocenteService} from '../../services/ges-docente/docente.service';
import {UtilsService} from '../../services/utils.service';

const rutasgesusu: Routes = [{
  path: '',
  component: GesDocenteComponent,
  children: [
    {
      path: 'docente',
      component: AddDocenteComponent,
    },
  ],
}];

@NgModule({
  declarations: [
    GesDocenteComponent,
    AddDocenteComponent,
    ModalAddDocenteComponent,

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
    ModalAddDocenteComponent,
  ],
  providers: [
    DocenteService,
    UtilsService,
  ],
})
export class GesDocenteModule { }
