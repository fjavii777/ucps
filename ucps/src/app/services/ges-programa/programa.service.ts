import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { throwError } from 'rxjs';
import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/operator/catch';
import {ProgramaModel} from '../../models/ges-matricula/programa.model';

@Injectable()
export class ProgramaService {
  rutaPrograma = 'https://api-ucps-unsa.herokuapp.com/api';
  constructor(private _http: HttpClient,
              // private utilsservice: UtilsService
  ) {

  }
  public getListarProgramas(): Observable<ProgramaModel[]> {
    return this._http
      .get<any>(this.rutaPrograma + `/programa/read.php`)
      .map((response: any) => {
        return response.map(d => new ProgramaModel(d));
      })
      .catch(this.handleError);
  }
  public getListarProgramasLista(): Observable<any> {
    return this._http
      .get<any>(this.rutaPrograma + `/programa/read.php`)
      .map((response: any) => {
        return response;
      })
      .catch(this.handleError);
  }
  public getProgramaById(id) {
    return this._http
      .post<any>(this.rutaPrograma + `/programa/read_id.php`, {proid: id})
      .catch(this.handleError);
  }
  public postcreatePrograma(data) {
    return this._http
      .post<any>(this.rutaPrograma + `/programa/create.php`, data)
      .catch(this.handleError);
  }
  public putUpdatePrograma(data) {
    return this._http
      .put<any>(this.rutaPrograma + `/programa/update.php`, data)
      .catch(this.handleError);
  }
  private handleError(error: any): Observable<any> {
    // this.utilsservice.showMensaje(false);
    console.error('An error occurred', error); // for demo purposes only
    return throwError(error);
  }
}
