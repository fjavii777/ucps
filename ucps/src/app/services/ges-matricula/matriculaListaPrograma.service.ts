import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GesMatriculaListaProgramaModel} from '../../models/ges-matricula/ges-matricula-listaprograma.model';
import {UtilsService} from '../utils.service';
import { throwError } from 'rxjs';
import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/operator/catch';

@Injectable()
export class MatriculaListaProgramaService {
   rutaMatricula = 'https://api-ucps-unsa.herokuapp.com/api';
  constructor(private _http: HttpClient,
              private utilsservice: UtilsService) {

  }
  public getListarMatriculaPrograma(): Observable<GesMatriculaListaProgramaModel[]> {
    return this._http
      .get<any>(this.rutaMatricula + `/matricula/matricula_cabecera/read_programa.php`)
      .map((response: any) => 
      {
        return response.map(d => new GesMatriculaListaProgramaModel(d));
      })
      .catch(this.handleError);
  }
 
  private handleError(error: any): Observable<any> {
    this.utilsservice.showMensaje(false);
    console.error('An error occurred', error); // for demo purposes only
    return throwError(error);
  }
}
