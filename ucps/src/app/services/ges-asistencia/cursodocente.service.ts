import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UtilsService} from '../utils.service';
import { throwError } from 'rxjs';
import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/operator/catch';
import { CursoDocenteModel } from '../../models/ges_asistencia/curso-docente.Model';
import { debug } from 'util';

@Injectable()
export class CursoDocenteService {
   rutaCurso = 'https://api-ucps-unsa.herokuapp.com/api';
  constructor(private _http: HttpClient,
              private utilsservice: UtilsService) {

  }

  
  public getListarCursoDocente(dni: string ,idpro :string): Observable<CursoDocenteModel[]> {
    return this._http
    .post<any>(this.rutaCurso + `/asistencia/readcurso_id.php`,'{"docdni":"' + dni +'","proid":"'+idpro+'"}')
      .map((response: any) => {
        
        return response.map(d => new CursoDocenteModel(d));
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    this.utilsservice.showMensaje(false);
    console.error('An error occurred', error); // for demo purposes only
    return throwError(error);
  }
}
