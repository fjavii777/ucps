import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {AuthenticationLoginModel} from '../../models/authentication/authentication.login.model';
import 'rxjs/add/operator/map';
import 'rxjs-compat/add/operator/catch';
import * as jwt_decode from 'jwt-decode';
import {Router} from '@angular/router';

@Injectable()
export class SeguridadService {
  rutaLogin = 'https://api-ucps-unsa.herokuapp.com/api/usuarios/acceso/login.php';

  constructor(private _http: HttpClient,
              private router: Router) {
  }

  public ObtenerCredencial(credencial: AuthenticationLoginModel): Observable<any> {
    return this._http
      .post(this.rutaLogin, credencial)
      .map((response: any) => {
        console.log('repsonse service', response);
        return response;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error); // for demo purposes only
    return throwError(error);
  }
  getDecodedAccessToken(): any {
    const token = this.obtenerToken();
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }
  getTokenAsObj(): any {
    return this.getDecodedAccessToken();
  }
  public existeToken(): boolean {
     return (this.obtenerToken() != null) ? (true) : false;
  }
  public obtenerToken() {
    return localStorage.getItem('AccessToken');
  }
  public cerrarSesion() {
    localStorage.removeItem('User');
    localStorage.removeItem('AccessToken');
    this.router.navigate(['/login']);
  }
}
