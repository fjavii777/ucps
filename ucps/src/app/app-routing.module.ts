import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import {RedirectGuard} from './services/authentication/redirect.guard';
/*import {
  // NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
  AuthUcpsComponent,
} from '@nebular/auth';*/

const routes: Routes = [
  {
    path: 'pages',
    loadChildren: 'app/pages/pages.module#PagesModule',
    canActivate: [RedirectGuard],
    canActivateChild: [RedirectGuard],
  },
  { path: '', loadChildren: 'app/pages/@auth/auth-ucps.module#AuthUcpsModule' },
 /*   component: AuthUcpsComponent,
    children: [
      {
        path: '',
        component: NbLoginComponent,
      },
      {
        path: 'login',
        component: AuthUcpsComponent,`
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],*/
  // },
  // { path: '', redirectTo: 'pages', pathMatch: 'full' }, // si no pone nada redirecciona a pages
  // { path: '', redirectTo: 'pages', pathMatch: 'full' }, // si no pone nada redirecciona a pages
  { path: '**', redirectTo: '' }, // si pones otra cualquier cosa redirecciona a pages
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
