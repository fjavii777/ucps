import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GesMatriculaCabeceraModel} from '../../models/ges-matricula/ges-matricula-cabecera.model';
import {UtilsService} from '../utils.service';
import { throwError } from 'rxjs';
import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/operator/catch';

@Injectable()
export class MatriculaCabeceraService {
   rutaMatricula = 'https://api-ucps-unsa.herokuapp.com/api';
  constructor(private _http: HttpClient,
              private utilsservice: UtilsService) {

  }
  public getListarMatriculaCabecera(): Observable<GesMatriculaCabeceraModel[]> {
    return this._http
      .get<any>(this.rutaMatricula + `/matricula/matricula_cabecera/read.php`)
      .map((response: any) => 
      {
        return response.map(d => new GesMatriculaCabeceraModel(d));
      })
      .catch(this.handleError);
  }
  public postCrearMatriculaCabecera(matriculacabecera: GesMatriculaCabeceraModel): Observable<GesMatriculaCabeceraModel> {
    return this._http
      .post(this.rutaMatricula + `/matricula/matricula_cabecera/create.php`,matriculacabecera)
      .map((response: GesMatriculaCabeceraModel) => {
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
