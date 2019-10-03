import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UtilsService} from '../utils.service';
import { throwError } from 'rxjs';
import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/operator/catch';
import { debug } from 'util';
import { AsistencaDatodModel } from '../../models/ges_asistencia/asistencia-datos.model';

@Injectable()
export class AsistenciaDatosService {
   rutaCurso = 'https://api-ucps-unsa.herokuapp.com/api';
  constructor(private _http: HttpClient,
              private utilsservice: UtilsService) {

  }
  public getListarAsistenciaDatos(dni: string ,idpro :string,idcur:string): Observable<AsistencaDatodModel> {
    return this._http
    .post<any>(this.rutaCurso + `/asistencia/header_curso.php`,'{"docdni":"' + dni +'","proid":"'+idpro+'","curid":"'+idcur+'"}')
      .map((response: any) => {        
        return  new AsistencaDatodModel(response);
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    this.utilsservice.showMensaje(false);
    console.error('An error occurred', error); // for demo purposes only
    return throwError(error);
  }
}
