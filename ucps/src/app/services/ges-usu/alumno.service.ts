import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {
  DeleteAlumnoModel,
  GesUsuAlumnoModel,
  GesUsuAlumnoModelSaveUpdate,
} from '../../models/ges-usu/ges-usu-alumno.model';
import {UtilsService} from '../utils.service';
import { throwError } from 'rxjs';
import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/operator/catch';
import {SeguridadService} from '../authentication/seguridad.service';

@Injectable()
export class AlumnoService {
   rutaAlumno = 'https://api-ucps-unsa.herokuapp.com/api';
  constructor(private _http: HttpClient,
              private seguridadService: SeguridadService,
              private utilsservice: UtilsService) {

  }
  // headers: HttpHeaders = new HttpHeaders({
  //   'Authorization': '$' + this.seguridadService.obtenerToken(),
  // });
  public getListarAlumnos(): Observable<GesUsuAlumnoModel[]> {
    // console.log(this.headers);
    return this._http
      .get<any>(this.rutaAlumno + `/usuarios/alumno/read.php`)
      .map((response: any) => {
        return response.map(d => new GesUsuAlumnoModel(d));
      })
      .catch(this.handleError);
  }
  public postBuscarAlumnoxId(dni: string): Observable<GesUsuAlumnoModel> {
    return this._http
      .post<any>(this.rutaAlumno + `/usuarios/alumno/read_id.php`, '{"AlDni":"' + dni + '"}')
      .map((response: any) => {
        return new GesUsuAlumnoModel(response);
      })
      .catch(this.handleError);
  }
  public postBuscarAlumnoxParteId(partOfdni: string): Observable<any> {
    return this._http
      .post<any>(this.rutaAlumno + `/usuarios/alumno/read_simple.php`, '{"alunom":"' + partOfdni + '"}')
      .map((response: any) => {
        return response;
      })
      .catch(this.handleError);
  }
  public postCrearAlumno(alumno: GesUsuAlumnoModelSaveUpdate): Observable<any> {
    return this._http
      .post(this.rutaAlumno + `/usuarios/alumno/create.php`, alumno)
      .map((response: any) => {
        this.utilsservice.showMensaje(true);
        return response;
      })
      .catch(this.handleError);
  }
  public putModificarAlumno(alumno: GesUsuAlumnoModelSaveUpdate): Observable<any> {
    return this._http
      .put(this.rutaAlumno + `/usuarios/alumno/update.php`, alumno)
      .map((response: any) => {
        console.log('response', response);
        this.utilsservice.showMensaje(true);
        return response;
      })
      .catch(this.handleError);
  }
  public deleteAlumno(alumno: DeleteAlumnoModel): Observable<any> {
    return this._http
      .put(this.rutaAlumno + `/usuarios/alumno/delete.php`, alumno)
      .map((response: any) => {
        this.utilsservice.showMensaje(true);
        return response;
      })
      .catch(this.handleError);
  }
  public getListarSearchAlumno(filtro): Observable<any> {
    return this._http
      .post(this.rutaAlumno + `/usuarios/alumno/buscador.php`, '{"aludni":"' + filtro + '"}')
      .map((response: any) => {
        return response;
      })
      .catch(this.handleError);
  }
  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error); // for demo purposes only
    return throwError(error);
  }
}
