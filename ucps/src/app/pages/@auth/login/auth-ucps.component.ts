import {Component, HostListener} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationLoginModel} from '../../../models/authentication/authentication.login.model';
import {SeguridadService} from '../../../services/authentication/seguridad.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'ngx-auth-ucps',
  templateUrl: './auth-ucps.component.html',
  styleUrls: ['./auth-ucps.component.scss',
              './login/vendor/bootstrap/css/bootstrap.min.css',
              './login/fonts/font-awesome-4.7.0/css/font-awesome.min.css',
              './login/fonts/iconic/css/material-design-iconic-font.min.css',
              './login/vendor/animate/animate.css',
              './login/vendor/css-hamburgers/hamburgers.min.css',
              './login/vendor/animsition/css/animsition.min.css',
              './login/vendor/select2/select2.min.css',
              './login/vendor/daterangepicker/daterangepicker.css',
              './login/css/util.css',
              './login/css/main.css',
  ],
})

export class AuthUcpsComponent {
  iserrorCredenciales = false;
  public myformlogin: FormGroup;
  public usuariologin: AuthenticationLoginModel = new AuthenticationLoginModel();
  constructor(private routeService: Router,
              private fb: FormBuilder,
              private seguridadService: SeguridadService) {
    this.myformlogin = this.fb.group({
      logusunom: [null, Validators.required],
      logusucon: [null, Validators.required],
    });
  }
  @HostListener('login')
  login() {
    this.iserrorCredenciales = false;
    this.pasarformToObjet();
    this.seguridadService.ObtenerCredencial(this.usuariologin)
      .subscribe(
        rest => {
          if (rest.logusu) {
            this.guardarToken(rest);
            this.iserrorCredenciales = false;
            this.routeService.navigate(['/pages']);
          } else {
            console.log('Error en las credenciales');
          }
        },
        error => {
          this.iserrorCredenciales = true;
          console.log('Error en el servicio' + error.message);
        },
      );
  }
  pasarformToObjet() {
    this.usuariologin.logusu = this.myformlogin.get('logusunom').value;
    this.usuariologin.logpass = this.myformlogin.get('logusucon').value;
  }
  guardarToken(token) {
    localStorage.setItem('User', token.logusu);
    localStorage.setItem('AccessToken', token.token);
  }
}

