import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'alumnoestadoregPipe',
})
export class AlumnoEstadoPipe implements PipeTransform {
  transform(value: string): string {
    if (value === 'A') {
      return 'Activo';
    } else {return 'Inactivo';
    }
  }
}
