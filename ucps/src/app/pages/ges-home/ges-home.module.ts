import { NgModule } from '@angular/core';
import {ThemeModule} from '../../@theme/theme.module';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ViewHomeComponent} from './view-home/view-home.component';
import {GesHomeComponent} from './ges-home.component';
   
@NgModule({
  declarations: [
    ViewHomeComponent,
    GesHomeComponent,
  ],
  imports: [
    ThemeModule,
    CommonModule,
    
  ],
  entryComponents: [
  ],
})
export class GesHomeModule { }
