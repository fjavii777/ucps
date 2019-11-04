import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UtilsService} from '../utils.service';
import { throwError } from 'rxjs';
import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/operator/catch';
import {SeguridadService} from '../authentication/seguridad.service';

@Injectable()
export class MatriculaService {
  rutaMatricula = 'https://api-ucps-unsa.herokuapp.com/api/matricula/';
  constructor(private _http: HttpClient,
              private seguridadService: SeguridadService,
              private utilsservice: UtilsService) {
  }
  // headers: HttpHeaders = new HttpHeaders({
  //   'Authorization': 'Bearer $' + this.seguridadService.obtenerToken(),
  // });
  public getListarAllMatriculas() {
    console.log('entro aca');
    return this._http
      .get<any>(this.rutaMatricula + 'read.php')
      .map((response: any) => {
        return response;
      })
      .catch(this.handleError);
  }
  public getListarMatriculaByID(id) {
    return this._http
      .post<any>(this.rutaMatricula + `read_id.php`, {matid: id});
  }
  public postSaveMatricula(data: any) {
    const temp = data.aludni.aludni;
    data.aludni = temp;
    console.log('data enviar: ', data);
    return this._http
      .post<any>(this.rutaMatricula + `create.php`, data);
  }
  public putUpdateMatricula(dni, data: any) {
    data.aludni = dni;
    return this._http
      .post<any>(this.rutaMatricula + `update.php`, data);
  }
  public getListarTurno(): Observable<any> {
    return this._http
      .get<any>(this.rutaMatricula + `/turno.php`)
      .map((response: any) => {
        return response;
      })
      .catch(this.handleError);
  }
  private handleError(error: any): Observable<any> {
    this.utilsservice.showMensaje(false);
    console.error('An error occurred', error); // for demo purposes only
    return throwError(error);
  }
}
