import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GesPensionlListModel} from '../../models/ges-pensiones/ges-pensiones-list.model';
import {UtilsService} from '../utils.service';
import { throwError } from 'rxjs';
import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/operator/catch';

@Injectable()
export class PensionListService {
   rutaPensionList = 'https://api-ucps-unsa.herokuapp.com/api';
  constructor(private _http: HttpClient,
              private utilsservice: UtilsService) {
  }
  public getListarPensionList(): Observable<GesPensionlListModel[]> {
    return this._http
      .get<any>(this.rutaPensionList + `/pension/pension_detalle.php`)
      .map((response: any) => {
        return response.map(d => new GesPensionlListModel(d));
      })
      .catch(this.handleError);
  }
  public getListarPensionxDNIFiltro(pal: string): Observable<GesPensionlListModel[]> {
    return this._http
      .post<any>(this.rutaPensionList + `/pension/busqueda_dni_nombre.php`,
        '{"palabrabus":"' + pal + '"}')
      .map((response: any) => {
        return response.map(d => new GesPensionlListModel(d));
      })
      .catch(this.handleError);
  }
  private handleError(error: any): Observable<any> {
    // this.utilsservice.showMensaje(false);
    console.error('An error occurred', error); // for demo purposes only
    return throwError(error);
  }
}
