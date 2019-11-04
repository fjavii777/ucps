import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UtilsService} from '../utils.service';
import { throwError } from 'rxjs';
import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/operator/catch';
import { debug } from 'util';
import { AsistencaDatodModel } from '../../models/ges_asistencia/asistencia-datos.model';
import { AlumnoAsistDocenteModel } from '../../models/ges_asistencia/asistencias-alumno.model';
import { AsistencaAlumnoModificarModel } from '../../models/ges_asistencia/asistencia-alumno-modificar.model';
import { AsistenciaModificarModel } from '../../models/ges_asistencia/asistencia-modificar.model';

@Injectable()
export class AsistenciaDatosService {
   rutaAsist = 'https://api-ucps-unsa.herokuapp.com/api';
  constructor(private _http: HttpClient,
              private utilsservice: UtilsService) {

  }
  public getListarAsistenciaDatos(dni: string ,idpro :string,idcur:string): Observable<AsistencaDatodModel> {
    return this._http
    .post<any>(this.rutaAsist + `/asistencia/header_curso.php`,'{"docdni":"' + dni +'","proid":"'+idpro+'","curid":"'+idcur+'"}')
      .map((response: any) => {        
        return  new AsistencaDatodModel(response);
      })
      .catch(this.handleError);
  }
  
  public postCrearAsistenciaAlumno(asistencias: AlumnoAsistDocenteModel): Observable<AlumnoAsistDocenteModel> {
    return this._http
      .post(this.rutaAsist + `/asistencia/create.php `, asistencias)
      .map((response: AlumnoAsistDocenteModel) => {
        this.utilsservice.showMensaje(true);
        return response;
      })
      .catch(this.handleError);
  }

  public putModificarAsistencia(asistencia: AsistenciaModificarModel): Observable<AsistenciaModificarModel> {
    return this._http
      .post(this.rutaAsist + `/asistencia/update.php`,asistencia)
      .map((response: AsistenciaModificarModel) => {
        this.utilsservice.showMensaje(true);
        return response;
      })
      .catch(this.handleError);
  }

  public postExisteAsistencia(asistencias: AsistencaAlumnoModificarModel): Observable<AsistencaAlumnoModificarModel> {
    return this._http
      .post(this.rutaAsist + `/asistencia/existasistencia.php `, asistencias)
      .map((response: AsistencaAlumnoModificarModel) => {
         //this.utilsservice.showMensaje(true);
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
