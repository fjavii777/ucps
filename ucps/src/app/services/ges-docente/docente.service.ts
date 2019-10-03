import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GesDocenteModel} from '../../models/ges-docente/ges-docente.model';
import {UtilsService} from '../utils.service';
import { throwError } from 'rxjs';
import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/operator/catch';

@Injectable()
export class DocenteService {
   rutaDocente = 'https://api-ucps-unsa.herokuapp.com/api';
  constructor(private _http: HttpClient,
              private utilsservice: UtilsService) {

  }
  public getListarDocente(): Observable<GesDocenteModel[]> {
    return this._http
      .get<any>(this.rutaDocente + `/usuarios/docente/read.php`)
      .map((response: any) => {
        return response.map(d => new GesDocenteModel(d));
      })
      .catch(this.handleError);
  }
  public postBuscarDocentexId(dni: string): Observable<GesDocenteModel> {
    return this._http
      .post<any>(
        this.rutaDocente + `/usuarios/docente/read_id.php`,
        '{"docdni":"' + dni + '"}')
      .map((response: any) => {
        return new GesDocenteModel(response);
      })
      .catch(this.handleError);
  }
  public postBuscarDocentexParteId(partOfdni: string): Observable<GesDocenteModel[]> {
    return this._http
      .post<any>(
        this.rutaDocente + `/usuarios/docente/read_id_autocomplete.php`,
        '{"docdni":"' + partOfdni + '"}')
      .map((response: any) => {
        return response.map(d => new GesDocenteModel(d));
      })
      .catch(this.handleError);
  }
  public postCrearDocente(docente: GesDocenteModel): Observable<GesDocenteModel> {
    return this._http
      .post(this.rutaDocente + `/usuarios/docente/create.php`, docente)
      .map((response: GesDocenteModel) => {
        this.utilsservice.showMensaje(true);
        return response;
      })
      .catch(this.handleError);
  }
  public putModificarDocente(docente: GesDocenteModel): Observable<GesDocenteModel> {
    console.log(docente);
    return this._http
      .put(this.rutaDocente + `/usuarios/docente/update.php`, docente)
      .map((response: GesDocenteModel) => {
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
