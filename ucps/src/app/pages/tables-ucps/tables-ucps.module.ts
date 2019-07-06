import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {ThemeModule} from '../../@theme/theme.module';
import { CommonModule } from '@angular/common';
import {Tableucpscomponent} from './tables-ucps.component';
import {RouterModule, Routes} from '@angular/router';
import {Crudlugarcomponent} from './crud-lugar/crud-lugar.component';
import {MockuoUcpsComponent} from './mockup-ucps/mockup-ucps.component';
import {ModalComponent} from './mockup-ucps/modal/modal.component';
import {DatePipe} from '@angular/common'


const rutasrequisitos: Routes = [{
path: '',
component: Tableucpscomponent,

children: [
    {
    path: 'crud-lugar',
    component: Crudlugarcomponent,

    },
    {
        path: 'mockup-ucps',
        component: MockuoUcpsComponent,
    
    },
],
}]
@NgModule({ 

    
declarations: [
    Tableucpscomponent,
    Crudlugarcomponent,
    ModalComponent,
    MockuoUcpsComponent, 
],
entryComponents: [
    ModalComponent,
    MockuoUcpsComponent,
],
imports: [
    RouterModule.forChild(rutasrequisitos),
    ThemeModule,
    CommonModule,
    Ng2SmartTableModule,
    
],
exports: [RouterModule],
providers:[DatePipe],

})
export class TablesucpsModule { }
