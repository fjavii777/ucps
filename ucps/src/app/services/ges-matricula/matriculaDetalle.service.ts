import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GesMatriculaDetalleModel} from '../../models/ges-matricula/ges-matricula-detalle.model';
import {GesMatriculaListaUpdateModel} from '../../models/ges-matricula/ges-matricula-update.model';
import {UtilsService} from '../utils.service';
import { throwError } from 'rxjs';
import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/operator/catch';

@Injectable()
export class MatriculaDetalleService {
   rutaMatricula = 'https://api-ucps-unsa.herokuapp.com/api';
  constructor(private _http: HttpClient,
              private utilsservice: UtilsService) {

  }
  public getListarMatriculaDetalle(): Observable<GesMatriculaDetalleModel[]> {
    return this._http
      .get<any>(this.rutaMatricula + `/matricula/matricula_detalle/read.php`)
      .map((response: any) => 
      {
        console.log("entre",response);
        return response.map(d => new GesMatriculaDetalleModel(d));
      })
      .catch(this.handleError);
  }
  public postCrearMatriculaDetalle(matriculadetalle: GesMatriculaDetalleModel): Observable<GesMatriculaDetalleModel> {
    return this._http
      .post(this.rutaMatricula + `/matricula/matricula_detalle/create.php`, matriculadetalle)
      .map((response: GesMatriculaDetalleModel) => {
        this.utilsservice.showMensaje(true);
        return response;
      })
      .catch(this.handleError);
  }
  public putModificarDetalle(matriculadetalle: GesMatriculaListaUpdateModel): Observable<GesMatriculaListaUpdateModel> {
    return this._http
      .put(this.rutaMatricula + `/matricula/matricula_detalle/update_listMatricula.php`, matriculadetalle)
      .map((response: GesMatriculaListaUpdateModel) => {
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
