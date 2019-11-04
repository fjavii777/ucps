import {Injectable} from '@angular/core';
import {NbToastStatus} from '@nebular/theme/components/toastr/model';
import {NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrService} from '@nebular/theme';

@Injectable()
export class UtilsService {
  position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates = false;
  index = 1;

  statusSucces: NbToastStatus = NbToastStatus.SUCCESS;
  titleSuccess = 'Bien Hecho!';
  contentSuccess = `Informacion guardada correctamente!`;

  statusFailed: NbToastStatus = NbToastStatus.DANGER;
  titleFailed= 'Oh No!';
  contentFailed= `Algo salio mal, intente nuevamente!`;

  constructor(private toastrService: NbToastrService) {
  }
  showMensaje(isSuccess: Boolean): void {
    if (isSuccess) {
      this.showToast(this.statusSucces, this.titleSuccess, this.contentSuccess);
    } else {
      this.showToast(this.statusFailed, this.titleFailed, this.contentFailed);
    }
  }
  private showToast(type: NbToastStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: true,
      duration: 3000,
      hasIcon: true,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
    };
    const titleContent = title ? `. ${title}` : '';

    this.index += 1;
    this.toastrService.show(
      body,
      `Mensaje ${this.index}${titleContent}`,
      config);
  }
  public getDateNow(): string { // 2019-07-09
    const today = new Date();
    const anio = String(today.getFullYear());
    const mes = this.transformTwoDigits(String(today.getMonth() + 1));
    const dia = this.transformTwoDigits(String(today.getDate()));
    return anio + '-' + mes + '-' + dia;
  }
  private transformTwoDigits(diaOrMes: string): string {
    let temp: any;
    if (diaOrMes.length === 1) {
      temp = '0' + diaOrMes;
    } else {
      temp = diaOrMes;
    }
    return temp;
  }
}
