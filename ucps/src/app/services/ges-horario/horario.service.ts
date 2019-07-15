import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GesHorarioReadProgramaModel} from '../../models/ges-horario/ges-horario-read.model';
import {UtilsService} from '../utils.service';
import { throwError } from 'rxjs';
import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/operator/catch';

@Injectable()
export class HorarioService {
   rutaHorario = 'https://api-ucps-unsa.herokuapp.com/api';
  constructor(private _http: HttpClient,
              private utilsservice: UtilsService) {

  }
  public getListarHorario(): Observable<GesHorarioReadProgramaModel[]> {
    return this._http
      .get<any>(this.rutaHorario + `/horario/read.php`)
      .map((response: any) => {
        return response.map(d => new GesHorarioReadProgramaModel(d));
      })
      .catch(this.handleError);
  }
  private handleError(error: any): Observable<any> {
    this.utilsservice.showMensaje(false);
    console.error('An error occurred', error); // for demo purposes only
    return throwError(error);
  }
}
