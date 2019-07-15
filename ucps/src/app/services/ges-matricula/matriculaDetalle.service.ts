import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {
  DeleteDetalleModal,
  GesMatriculaDetalleDTO,
  GesMatriculaDetalleModel,
} from '../../models/ges-matricula/ges-matricula-detalle.model';
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
  public getListarDetallesXidCabecera(idcabecera: string):
    Observable<GesMatriculaDetalleModel[]> {
    return this._http
      .post(this.rutaMatricula + `/matricula/matricula_detalle/read_id_cab.php`, '{"matcabid":"' + idcabecera + '"}')
      .map((response: any) => {
        return response.map(d => new GesMatriculaDetalleModel(d));
      })
      .catch(this.handleError);
  }
  public postBuscarDetalleXid(iddetalle: string):
    Observable<GesMatriculaDetalleModel> {
    return this._http
      .post(this.rutaMatricula + `/matricula/matricula_detalle/read_id.php`, '{"matdetid":"' + iddetalle + '"}')
      .map((response: GesMatriculaDetalleModel) => {
        return response;
      })
      .catch(this.handleError);
  }
  public postCrearMatriculaDetalle(matriculadetalle: GesMatriculaDetalleDTO): Observable<GesMatriculaDetalleDTO> {
    return this._http
      .post(this.rutaMatricula + `/matricula/matricula_detalle/create.php`, matriculadetalle)
      .map((response: GesMatriculaDetalleDTO) => {
        this.utilsservice.showMensaje(true);
        return response;
      })
      .catch(this.handleError);
  }
  public putModificarDetalle(matriculadetalle: GesMatriculaDetalleDTO): Observable<GesMatriculaDetalleDTO> {
    return this._http
      .put(this.rutaMatricula + `/matricula/matricula_detalle/update.php`, matriculadetalle)
      .map((response: GesMatriculaDetalleDTO) => {
        this.utilsservice.showMensaje(true);
        return response;
      })
      .catch(this.handleError);
  }
  public deleteDetalle(matriculadetalle: DeleteDetalleModal): Observable<DeleteDetalleModal> {
    return this._http
      .put(this.rutaMatricula + `/matricula/matricula_detalle/delete.php`, matriculadetalle)
      .map((response: DeleteDetalleModal) => {
        this.utilsservice.showMensaje(true);
        return response;
      })
      .catch(this.handleError);
  }
  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error); // for demo purposes only
    return throwError(error);
  }
}
