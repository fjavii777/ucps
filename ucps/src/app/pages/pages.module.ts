import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { GesHomeModule } from './ges-home/ges-home.module';
// import { ECommerceModule } from './ges-home/vie ';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';


const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    ECommerceModule,
    GesHomeModule,
    MiscellaneousModule,
  ],
  declarations: [
    PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
