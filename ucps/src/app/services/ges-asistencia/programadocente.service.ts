import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UtilsService} from '../utils.service';
import { throwError } from 'rxjs';
import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/operator/catch';
import { ProgramaDocenteModel } from '../../models/ges_asistencia/programa-docente';

@Injectable()
export class ProgramaDocenteService {
   rutaCurso = 'https://api-ucps-unsa.herokuapp.com/api';
  constructor(private _http: HttpClient,
              private utilsservice: UtilsService) {

  }

  
  public getListarProgramaDocente(dni: string): Observable<ProgramaDocenteModel[]> {
    return this._http
      .post<any>(this.rutaCurso + `/asistencia/readprograma_id.php`,'{"docdni":"' + dni + '"}')
      .map((response: any) => {
        return response.map(d => new ProgramaDocenteModel(d));
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    this.utilsservice.showMensaje(false);
    console.error('An error occurred', error); // for demo purposes only
    return throwError(error);
  }
}
