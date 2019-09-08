import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GesAdministrativoModel} from '../../models/ges-administrativo/ges-administrativo.model';
import {UtilsService} from '../utils.service';
import { throwError } from 'rxjs';
import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/operator/catch';

@Injectable()
export class AdministrativoService {
   rutaAdtvo = 'https://api-ucps-unsa.herokuapp.com/api';
  constructor(private _http: HttpClient,
              private utilsservice: UtilsService) {

  }
  public getListarAdministrativo(): Observable<GesAdministrativoModel[]> {
    return this._http
      .get<any>(this.rutaAdtvo + `/usuarios/administrativo/read.php`)
      .map((response: any) => {
        return response.map(d => new GesAdministrativoModel(d));
      })
      .catch(this.handleError);
  }
  public postBuscarAdministrativoxId(dni: string): Observable<GesAdministrativoModel> {
    return this._http
      .post<any>(this.rutaAdtvo + `/usuarios/administrativo/read_id.php`, '{"admdni":"' + dni + '"}')
      .map((response: any) => {
        return new GesAdministrativoModel(response);
      })
      .catch(this.handleError);
  }
  public postBuscarAdministrativoxParteId(partOfdni: string): Observable<GesAdministrativoModel[]> {
    return this._http
      .post<any>(this.rutaAdtvo + `/usuarios/administrativo/read_id_autocomplete.php`, '{"admdni":"' + partOfdni + '"}')
      .map((response: any) => {
        return response.map(d => new GesAdministrativoModel(d));
      })
      .catch(this.handleError);
  }
  public postCrearAdministrativo(adtvo: GesAdministrativoModel): Observable<GesAdministrativoModel> {
    return this._http
      .post(this.rutaAdtvo + `/usuarios/administrativo/create.php`, adtvo)
      .map((response: GesAdministrativoModel) => {
        this.utilsservice.showMensaje(true);
        return response;
      })
      .catch(this.handleError);
  }
  public putModificarAdministrativo(adtvo: GesAdministrativoModel): Observable<GesAdministrativoModel> {
    console.log(adtvo);
    return this._http
      .put(this.rutaAdtvo + `/usuarios/administrativo/update.php`, adtvo)
      .map((response: GesAdministrativoModel) => {
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
