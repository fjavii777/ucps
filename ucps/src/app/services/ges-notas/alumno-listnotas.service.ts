import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UtilsService} from '../utils.service';
import { throwError } from 'rxjs';
import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/operator/catch';
import { AlumnoNotasModel } from '../../models/ges-nota/alumno-notas.model';

@Injectable()
export class AlumnoListNotasService {
   rutaCurso = 'https://api-ucps-unsa.herokuapp.com/api';
  constructor(private _http: HttpClient,
              private utilsservice: UtilsService) {

  }
  
  public getListarNotasAlumnos(curid: string,tipnottipo: string): Observable<AlumnoNotasModel[]> {
    return this._http
      .post<any>(this.rutaCurso + `/nota/read_curso_notas.php`,'{"curid":"'+curid+'","tipnottipo":"'+tipnottipo+'"}')
      .map((response: any) => {
        return response.map(d => new AlumnoNotasModel(d));
      })
      .catch(this.handleError);
  }

  public saveNotasAlumnos(objarray: AlumnoNotasModel[]): Observable<any>{
    return this._http
      .post<any>(this.rutaCurso + `/nota/create_curso_alumno_nota.php`,objarray)
      .map((response: any) => {
       console.log('response', response);
       this.utilsservice.showMensaje(true);
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
