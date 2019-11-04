import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GesPensionModel} from '../../models/ges-pensiones/ges-pensiones.model';
import { GesCuotasModel } from '../../models/ges-pensiones/ges-cuotas.model';
import { GesCuotaModel } from '../../models/ges-pensiones/ges-cuota.model';
import {UtilsService} from '../utils.service';
import { throwError } from 'rxjs';
import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/operator/catch';


@Injectable()
export class PensionService {
   rutaPension = 'https://api-ucps-unsa.herokuapp.com/api';
  constructor(private _http: HttpClient,
              private utilsservice: UtilsService) {
  }
  public getListarPension(): Observable<GesPensionModel[]> {
    return this._http
      .get<any>(this.rutaPension + `/pension/read.php`)
      .map((response: any) => {
        return response.map(d => new GesPensionModel(d));
      })
      .catch(this.handleError);
  }
  public postListarCuota(pagid:string ): Observable<GesCuotasModel[]> {
    return this._http
      .post<any>(this.rutaPension + `/pension/read_cuotas_pago.php`,'{"pagid":"' + pagid + '"}')
      .map((response: any) => {
        return response.map(d => new GesCuotasModel(d));
      })
      .catch(this.handleError);
  }
  public postBuscarPensionxId(id: string): Observable<GesPensionModel> {
    return this._http
      .post<any>(this.rutaPension + `/pension/busqueda_id.php`, '{"pagid":"' + id + '"}')
      .map((response: any) => {
        return new GesPensionModel(response);
      })
      .catch(this.handleError);
  }
  public postBuscarPensionxParteIdDetalle(partOfid: string): Observable<GesPensionModel[]> {
    return this._http
      .post<any>(this.rutaPension + `/pension/pension_pago.php`, '{"matid":"' + partOfid + '"}')
      .map((response: any) => {
        return response.map(d => new GesPensionModel(d));
      })
      .catch(this.handleError);
  }
  public postCrearPension(pension: GesPensionModel): Observable<GesPensionModel> {
    return this._http
      .post(this.rutaPension + `/pension/create.php`, pension)
      .map((response: GesPensionModel) => {
        this.utilsservice.showMensaje(true);
        return response;
      })
      .catch(this.handleError);
  }
  public postCrearCuota(cuota: GesCuotaModel): Observable<GesCuotaModel> {
    return this._http
      .post(this.rutaPension + `/pension/create_cuota.php`, cuota)
      .map((response: GesCuotaModel) => {
        this.utilsservice.showMensaje(true);
        return response;
      })
      .catch(this.handleError);
  }
  public putModificarPension(pension: GesPensionModel): Observable<GesPensionModel> {
    console.log("La pension",pension);
    return this._http
      .put(this.rutaPension + `/pension/update.php`, pension)
      .map((response: GesPensionModel) => {
        this.utilsservice.showMensaje(true);
        return response;
      })
      .catch(this.handleError);
  }
  private handleError(error: any): Observable<any> {
    // this.utilsservice.showMensaje(false);
    console.error('An error occurred', error); // for demo purposes only
    return throwError(error);
  }
}
