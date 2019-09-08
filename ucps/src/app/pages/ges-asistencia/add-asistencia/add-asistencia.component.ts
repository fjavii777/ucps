import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {AlumnoService} from '../../../services/ges-usu/alumno.service';
import {DeleteAlumnoModel, GesUsuAlumnoModel} from '../../../models/ges-usu/ges-usu-alumno.model';

@Component({
  selector: 'ngx-add-asistencia',
  styleUrls: ['./add-asistencia.component.scss'],
  templateUrl: './add-asistencia.component.html',
})
export class AddAsistenciaComponent implements OnInit {
 
  cars:any[];
  constructor(private router: Router) {
    this.cars = [
      { fila: '1', dia: 'Lunes',ciclo:"II",seccion:'A',curso:'GASTRONOMIA-EDUCACION',horainicial:'07:15',horafinal:'08:45'},
      { fila: '2', dia: 'Martes',ciclo:"I",seccion:'A',curso:'EDUCACION',horainicial:'07:15',horafinal:'08:45'},
      { fila: '3', dia: 'Martes',ciclo:"II",seccion:'A',curso:'GASTRONOMIA',horainicial:'07:15',horafinal:'08:45'},
      { fila: '4', dia: 'Jueves',ciclo:"III",seccion:'A',curso:'GASTRONOMIA',horainicial:'07:15',horafinal:'08:45'},
      { fila: '5', dia: 'Viernes',ciclo:"I",seccion:'A',curso:'GASTRONOMIA',horainicial:'07:15',horafinal:'08:45'},
      { fila: '6', dia: 'Viernes',ciclo:"I",seccion:'A',curso:'GASTRONOMIA',horainicial:'07:15',horafinal:'08:45'}
  ];
  }
  ngOnInit(): void {

  }
  abrirDetallesAsistencia(idcabecera: number) {
    this.router.navigate(['/pages/ges-asistencia/pensiondetalle/' + idcabecera]);
  }
  
}




