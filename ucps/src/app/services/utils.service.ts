import {Injectable} from '@angular/core';
import {NbToastStatus} from '@nebular/theme/components/toastr/model';
import {NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrService} from '@nebular/theme';

@Injectable()
export class UtilsService {
  position: NbGlobalPosition = NbGlobalPhysicalPosition.BOTTOM_RIGHT;
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
}
