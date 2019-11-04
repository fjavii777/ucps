import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UtilsService} from '../utils.service';
import { throwError } from 'rxjs';
import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/operator/catch';
import { debug } from 'util';
import { AlumnoDocenteModel } from '../../models/ges_asistencia/alumno-docente.model';
import { AlumnosDocentesModel } from '../../models/ges_asistencia/alumnos-docentes.model';

@Injectable()
export class AlumnoDocenteService {
   rutaCurso = 'https://api-ucps-unsa.herokuapp.com/api';
  constructor(private _http: HttpClient,
              private utilsservice: UtilsService) {

  }

  
  public getListarAlumnoDocente(dni: string ,idpro :string,fecha:string): Observable<AlumnoDocenteModel[]> {
    return this._http
    .post<any>(this.rutaCurso + `/asistencia/read_asialumnos.php`,'{"docdni":"' + dni +'","curid":"'+idpro+'","fecha":"'+fecha+'"}')
      .map((response: any) => {
        
        return response.map(d => new AlumnoDocenteModel(d));
      })
      .catch(this.handleError);
  }
  public getListarAlumnosDocentes(dni: string ,idpro :string,curid:string): Observable<AlumnosDocentesModel[]> {
    return this._http
    .post<any>(this.rutaCurso + `/asistencia/read_alumnos.php`,'{"docdni":"' + dni +'","proid":"'+idpro+'","curid":"'+curid+'"}')
      .map((response: any) => {
        
        return response.map(d => new AlumnosDocentesModel(d));
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    this.utilsservice.showMensaje(false);
    console.error('An error occurred', error); // for demo purposes only
    return throwError(error);
  }
}
