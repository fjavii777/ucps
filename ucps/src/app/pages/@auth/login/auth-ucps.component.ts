import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationLoginModel} from '../../../models/authentication/authentication.login.model';
import {SeguridadService} from '../../../services/authentication/seguridad.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'ngx-auth-ucps',
  styleUrls: ['./auth-ucps.component.scss'],
  templateUrl: './auth-ucps.component.html',
})

export class AuthUcpsComponent {
  public myformlogin: FormGroup;
  public usuariologin: AuthenticationLoginModel = new AuthenticationLoginModel();

  constructor(private routeService: Router,
              private fb: FormBuilder,
              private seguridadService: SeguridadService) {
    this.myformlogin = this.fb.group({
      logusunom: [null, Validators.required],
      logusucon: [null, Validators.required],
      logusutipo: ['administrativo', Validators.required],
    });
  }
  login() {
    this.pasarformToObjet();
    this.seguridadService.ObtenerCredencial(this.usuariologin)
      .subscribe(
        rest => {
          if (rest.logusunom) {
            this.routeService.navigate(['/pages']);
          } else {
            console.log('Error en las credenciales');
          }
        },
        error => {
          console.log('Error en el servicio' + error.message);
        },
      );
  }
  pasarformToObjet() {
    this.usuariologin.logusunom = this.myformlogin.get('logusunom').value;
    this.usuariologin.logusucon = this.myformlogin.get('logusucon').value;
    this.usuariologin.logusutipo = this.myformlogin.get('logusutipo').value;
  }
}

