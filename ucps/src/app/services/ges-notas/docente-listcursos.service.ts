import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UtilsService} from '../utils.service';
import { throwError } from 'rxjs';
import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/operator/catch';
import { DocenteListCursosModel } from '../../models/ges-nota/docente-cursos.model';

@Injectable()
export class DocenteListCursosService {
   rutaCurso = 'https://api-ucps-unsa.herokuapp.com/api';
  constructor(private _http: HttpClient,
              private utilsservice: UtilsService) {

  }

  
  public getListarCursosDocente(dni: string): Observable<DocenteListCursosModel[]> {
    return this._http
      .post<any>(this.rutaCurso + `/curso/read_docente_cursos.php`,'{"docdni":"' + dni + '"}')
      .map((response: any) => {
        return response.map(d => new DocenteListCursosModel(d));
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    this.utilsservice.showMensaje(false);
    console.error('An error occurred', error); // for demo purposes only
    return throwError(error);
  }
}
