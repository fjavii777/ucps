import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DeleteAlumnoModel, GesUsuAlumnoModel} from '../../models/ges-usu/ges-usu-alumno.model';
import {UtilsService} from '../utils.service';
import { throwError } from 'rxjs';
import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/operator/catch';
import {error} from "util";

@Injectable()
export class AlumnoService {
   rutaAlumno = 'https://api-ucps-unsa.herokuapp.com/api';
  constructor(private _http: HttpClient,
              private utilsservice: UtilsService) {

  }
  public getListarAlumnos(): Observable<GesUsuAlumnoModel[]> {
    return this._http
      .get<any>(this.rutaAlumno + `/usuarios/alumno/read.php`)
      .map((response: any) => {
        return response.map(d => new GesUsuAlumnoModel(d));
      })
      .catch(this.handleError);
  }
  public postBuscarAlumnoxId(dni: string): Observable<GesUsuAlumnoModel[]> {
    return this._http
      .post<any>(this.rutaAlumno + `/usuarios/alumno/read_id.php`, '{"AlDni":"' + dni + '"}')
      .map((response: any) => {
        return response.map(d => new GesUsuAlumnoModel(d));
      })
      .catch(this.handleError);
  }
  public postBuscarAlumnoxParteId(partOfdni: string): Observable<GesUsuAlumnoModel[]> {
    return this._http
      .post<any>(this.rutaAlumno + `/usuarios/alumno/read_id_autocomplete.php`, '{"AlDni":"' + partOfdni + '"}')
      .map((response: any) => {
        return response.map(d => new GesUsuAlumnoModel(d));
      })
      .catch(this.handleError);
  }
  public postCrearAlumno(alumno: GesUsuAlumnoModel): Observable<GesUsuAlumnoModel> {
    return this._http
      .post(this.rutaAlumno + `/usuarios/alumno/create.php`, alumno)
      .map((response: GesUsuAlumnoModel) => {
        this.utilsservice.showMensaje(true);
        return response;
      })
      .catch(this.handleError);
  }
  public putModificarAlumno(alumno: GesUsuAlumnoModel): Observable<any> {
    return this._http
      .put(this.rutaAlumno + `/usuarios/alumno/update.php`, alumno)
      .map((response: any) => {
        console.log('response', response);
        this.utilsservice.showMensaje(true);
        return response;
      })
      .catch(this.handleError);
  }
  public deleteAlumno(alumno: DeleteAlumnoModel): Observable<DeleteAlumnoModel> {
    return this._http
      .put(this.rutaAlumno + `/usuarios/alumno/delete.php`, alumno)
      .map((response: DeleteAlumnoModel) => {
        this.utilsservice.showMensaje(true);
        return response;
      })
      .catch(this.handleError);
  }
  private handleError(error: any): Observable<any> {
    // this.utilsservice.showMensaje(false);
    console.error('An error occurred', error); // for demo purposes only
    return throwError(error);
  }
}
