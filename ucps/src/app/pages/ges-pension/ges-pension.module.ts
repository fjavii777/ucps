import {NgModule } from '@angular/core';
import {ThemeModule} from '../../@theme/theme.module';
import {CommonModule } from '@angular/common';
import {NbDialogModule, NbWindowModule,NbActionsModule } from '@nebular/theme';
import {RouterModule, Routes} from '@angular/router';
import {AddPensionComponent} from './add-pension/add-pension.component';
import {GesPensionComponent} from './ges-pension.component';
import {PensionService} from '../../services/ges-pensiones/ges-pensiones.service';
import {PensionListService} from '../../services/ges-pensiones/ges-pensionesList.service';
import {UtilsService} from '../../services/utils.service';
import {PensionDetalleComponent} from './add-pension/pension-detalle/pension-detalle.component';
import {ModalAddPensionComponent} from './add-pension/modal-add-pension/modal-add-pension.component';
import { DetallePagoComponent } from './add-pension/detalle-pago/detalle-pago.component';
import { ModalAddCuotaComponent } from './add-pension/modal-add-cuota/modal-add-cuota.component';
const rutasgesusu: Routes = [{
  path: '',
  component: GesPensionComponent,
  children: [
    {
      path: 'agregarpension',
      component: AddPensionComponent,
    },
  ],
},
  {
    path: 'pensiondetalle/:id/:nombres/:sede/:programa',
    component: PensionDetalleComponent,
    // data: {modo: 2}
  },
  {
    path: 'detallepago/:id',
    component: DetallePagoComponent,
    // data: {modo: 2}
  }
];


@NgModule({
  declarations: [
    AddPensionComponent,
    GesPensionComponent,
    PensionDetalleComponent,
    ModalAddPensionComponent,
    ModalAddCuotaComponent,
    DetallePagoComponent,
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
    PensionService,
    PensionListService,
    UtilsService,
  ],
  entryComponents: [
    ModalAddPensionComponent,
    ModalAddCuotaComponent,
  ],
})
export class GesPensionModule { }
