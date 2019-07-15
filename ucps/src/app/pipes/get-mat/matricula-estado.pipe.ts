import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'matriculaestadoregPipe',
})
export class MatriculaEstadoPipe implements PipeTransform {
  transform(value: string): string {
    if (value === 'A') {
      return 'Activo';
    } else {return 'Inactivo';
    }
  }
}
