import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GesCursoReadModel} from '../../models/ges-curso/ges-curso-read.model';
import {UtilsService} from '../utils.service';
import { throwError } from 'rxjs';
import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/operator/catch';

@Injectable()
export class CursoService {
   rutaCurso = 'https://api-ucps-unsa.herokuapp.com/api';
  constructor(private _http: HttpClient,
              private utilsservice: UtilsService) {

  }
  public getListarCursos(): Observable<GesCursoReadModel[]> {
    return this._http
      .get<any>(this.rutaCurso + `/curso/read.php`)
      .map((response: any) => {
        return response.map(d => new GesCursoReadModel(d));
      })
      .catch(this.handleError);
  }
//   public postCrearCurso(alumno: GesCursoReadModel): Observable<GesCursoReadModel> {
//     return this._http
//       .post(this.rutaCurso + `/usuarios/alumno/create.php`, alumno)
//       .map((response: GesCursoReadModel) => {
//         this.utilsservice.showMensaje(true);
//         return response;
//       })
//       .catch(this.handleError);
//   }
  private handleError(error: any): Observable<any> {
    this.utilsservice.showMensaje(false);
    console.error('An error occurred', error); // for demo purposes only
    return throwError(error);
  }
}
