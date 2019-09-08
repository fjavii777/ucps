import { NgModule } from '@angular/core';
import {ThemeModule} from '../../@theme/theme.module';
import { CommonModule } from '@angular/common';
import {NbActionsModule, NbDialogModule, NbWindowModule} from '@nebular/theme';
import {RouterModule, Routes} from '@angular/router';
import {AddAdministrativoComponent} from './add-administrativo/add-administrativo.component';
import {GesAdministrativoComponent} from './ges-administrativo.component';
import {ModalAddAdministrativoComponent} from './add-administrativo/modal-add-administrativo/modal-add-administrativo.component';
import {AdministrativoService} from '../../services/ges-administrativo/administrativo.service';
import {UtilsService} from '../../services/utils.service';

const rutasgesusu: Routes = [{
  path: '',
  component: GesAdministrativoComponent,
  children: [
    {
      path: 'administrativo',
      component: AddAdministrativoComponent,
    },
  ],
}];

@NgModule({
  declarations: [
    GesAdministrativoComponent,
    AddAdministrativoComponent,
    ModalAddAdministrativoComponent,

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
    ModalAddAdministrativoComponent,
  ],
  providers: [
    AdministrativoService,
    UtilsService,
  ],
})
export class GesAdministrativoModule { }
