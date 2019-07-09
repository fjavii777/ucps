import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {AuthenticationLoginModel} from '../../models/authentication/authentication.login.model';
import 'rxjs/add/operator/map';
import 'rxjs-compat/add/operator/catch';

@Injectable()
export class SeguridadService {
  rutaLogin = 'https://api-ucps-unsa.herokuapp.com/api/usuarios/acceso/login.php';

  constructor(private _http: HttpClient) {
  }

  public ObtenerCredencial(credencial: AuthenticationLoginModel): Observable<AuthenticationLoginModel> {
    return this._http
      .post(this.rutaLogin, credencial)
      .map((response: AuthenticationLoginModel) => {
        return response;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error); // for demo purposes only
    return throwError(error);
  }
}
