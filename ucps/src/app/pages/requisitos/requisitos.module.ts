import { NgModule } from '@angular/core';
import {ThemeModule} from '../../@theme/theme.module';
import { CommonModule } from '@angular/common';
import {RequisitosComponent} from './requisitos.component';
import { NbDialogModule, NbWindowModule } from '@nebular/theme';
import {RouterModule, Routes} from '@angular/router';
import {InformeComponent} from './informe/informe.component';

import {ModalRequisitosComponent} from './informe/modal-requisitos/modal-requisitos.component';

const rutasrequisitos: Routes = [{
  path: '',
  component: InformeComponent,
  children: [
    {
      path: 'informe',
      component: InformeComponent,
    },
    {
      path: 'modal',
      component: ModalRequisitosComponent,
    },
  ],
}];
const COMPONENTS = [
  ModalRequisitosComponent,
];
const ENTRY_COMPONENTS = [
  ModalRequisitosComponent,
];
@NgModule({
  declarations: [
    RequisitosComponent,
    InformeComponent, 
    ModalRequisitosComponent,
  ],
  imports: [
    ThemeModule,
    CommonModule,
    RouterModule.forChild(rutasrequisitos),
    NbDialogModule.forChild(),
    NbWindowModule.forChild(),
  ],
  entryComponents: [
    ModalRequisitosComponent,
  ],
})
export class RequisitosModule { }
