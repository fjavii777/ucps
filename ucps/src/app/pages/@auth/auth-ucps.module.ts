import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthUcpsComponent} from './login/auth-ucps.component';
import {ThemeModule} from '../../@theme/theme.module';
import {SeguridadService} from '../../services/authentication/seguridad.service';
// import {HttpClientModule} from '@angular/common/http';
export const AuthenticationRoutes: Routes = [
  {
    path: '',
    component: AuthUcpsComponent,
   /* redirectTo: '/auth/login',
    pathMatch: 'full',*/
  },
  {
    path: 'login',
    component: AuthUcpsComponent,
    data: {
      breadcrumb: 'Login',
    },
  },
];

@NgModule({
  imports: [
    ThemeModule,
    CommonModule,
    RouterModule.forChild(AuthenticationRoutes),
    FormsModule,
    ReactiveFormsModule,
    // HttpClientModule,
],
  declarations: [AuthUcpsComponent],
  providers: [SeguridadService],
})
export class AuthUcpsModule { }
