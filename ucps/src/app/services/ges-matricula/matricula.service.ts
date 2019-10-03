import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UtilsService} from '../utils.service';
import { throwError } from 'rxjs';
import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/operator/catch';

@Injectable()
export class MatriculaService {
  rutaMatricula = 'https://api-ucps-unsa.herokuapp.com/api/matricula/';
  constructor(private _http: HttpClient,
              private utilsservice: UtilsService) {
  }
  public getListarAllMatriculas() {
    return this._http
      .get<any>(this.rutaMatricula + `read.php`);
  }
  public getListarMatriculaByID(id) {
    return this._http
      .post<any>(this.rutaMatricula + `read_id.php`, {matid: id});
  }
  public postSaveMatricula(data: any) {
    return this._http
      .post<any>(this.rutaMatricula + `create.php`, data );
  }
  public putUpdateMatricula(data: any) {
    return this._http
      .post<any>(this.rutaMatricula + `update.php`, data );
  }
  // public getListarMatriculaCabeceraFiltro(dni: string): Observable<GesMatriculaCabeceraModel[]> {
  //   return this._http
  //     .post<any>(this.rutaMatricula + `/matricula/matricula_cabecera/read_id_autocomplete.php`,
  //       '{"aldni":"' + dni + '"}')
  //     .map((response: any) => {
  //       return response.map(d => new GesMatriculaCabeceraModel(d));
  //     })
  //     .catch(this.handleError);
  // }
  // public postCrearMatriculaCabecera(matriculacabecera: GesMatriculaCabeceraDTO):
  //   Observable<GesMatriculaCabeceraDTO> {
  //   return this._http
  //     .post(this.rutaMatricula + `/matricula/matricula_cabecera/create.php`, matriculacabecera)
  //     .map((response: GesMatriculaCabeceraDTO) => {
  //       this.utilsservice.showMensaje(true);
  //       return response;
  //     })
  //     .catch(this.handleError);
  // }
  // public putModificarMatriculaCabecera(matriculacabecera: GesMatriculaCabeceraDTO):
  //   Observable<GesMatriculaCabeceraDTO> {
  //   return this._http
  //     .put(this.rutaMatricula + `/matricula/matricula_cabecera/update.php`, matriculacabecera)
  //     .map((response: GesMatriculaCabeceraDTO) => {
  //       this.utilsservice.showMensaje(true);
  //       return response;
  //     })
  //     .catch(this.handleError);
  // }
  // public postBuscarCabeceraXid(idcabecera: string):
  //   Observable<GesMatriculaCabeceraModel> {
  //   return this._http
  //     .post(this.rutaMatricula + `/matricula/matricula_cabecera/read_id.php`, '{"matcabid":"' + idcabecera + '"}')
  //     .map((response: GesMatriculaCabeceraModel) => {
  //       return response;
  //     })
  //     .catch(this.handleError);
  // }
  // public deleteCabecera(matriculadetalle: DeleteMatriculaCabecera): Observable<DeleteMatriculaCabecera> {
  //   return this._http
  //     .put(this.rutaMatricula + `/matricula/matricula_cabecera/delete.php`, matriculadetalle)
  //     .map((response: DeleteMatriculaCabecera) => {
  //       this.utilsservice.showMensaje(true);
  //       return response;
  //     })
  //     .catch(this.handleError);
  // }
  private handleError(error: any): Observable<any> {
    this.utilsservice.showMensaje(false);
    console.error('An error occurred', error); // for demo purposes only
    return throwError(error);
  }
}
