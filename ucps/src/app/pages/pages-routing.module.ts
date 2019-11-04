import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { GesHomeComponent } from './ges-home/ges-home.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'ges-usu',
    loadChildren: './ges-usu/ges-usu.module#GesUsuModule',
  },
  {
    path: 'ges-matricula',
    loadChildren: './ges-matricula/ges-matricula.module#GesMatriculaModule',
  } ,
  {
    path: 'ges-pension',
    loadChildren: './ges-pension/ges-pension.module#GesPensionModule',
  } ,
  {
    path: 'ges-horario',
    loadChildren: './ges-horario/ges-horario.module#GesHorarioModule',
  } ,
  {
    path: 'ges-asistencia',
    loadChildren: './ges-asistencia/ges-asistencia.module#GesAsistenciaModule',
  } ,
  {
    path: 'ges-curso',
    loadChildren: './ges-curso/ges-curso.module#GesCursoModule',
  } ,
  {
    path: 'ges-docente',
    loadChildren: './ges-docente/ges-docente.module#GesDocenteModule',
  } ,
  {
    path: 'ges-administrativo',
    loadChildren: './ges-administrativo/ges-administrativo.module#GesAdministrativoModule',
  } ,
  {
    path: 'ges-nota',
    loadChildren: './ges-nota/ges-nota.module#GesNotaModule',
  },
  {
    path : 'view-home',
    component: GesHomeComponent,
  },
  {
    path: 'dashboard',
    component: ECommerceComponent,
  }, {
    path: 'iot-dashboard',
    component: DashboardComponent,
  }, {
    path: 'ui-features',
    loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
  }, {
    path: 'modal-overlays',
    loadChildren: './modal-overlays/modal-overlays.module#ModalOverlaysModule',
  }, {
    path: 'extra-components',
    loadChildren: './extra-components/extra-components.module#ExtraComponentsModule',
  }, {
    path: 'bootstrap',
    loadChildren: './bootstrap/bootstrap.module#BootstrapModule',
  }, {
    path: 'maps',
    loadChildren: './maps/maps.module#MapsModule',
  }, {
    path: 'charts',
    loadChildren: './charts/charts.module#ChartsModule',
  }, {
    path: 'editors',
    loadChildren: './editors/editors.module#EditorsModule',
  }, {
    path: 'forms',
    loadChildren: './forms/forms.module#FormsModule',
  }, {
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule',
  }, {
    path: 'miscellaneous',
    loadChildren: './miscellaneous/miscellaneous.module#MiscellaneousModule',
  }, {
    path: '',
    redirectTo: 'view-home',
    pathMatch: 'full',
  }, {
    path: '**',
    component: NotFoundComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
