import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {GesPensionModel} from '../../../../models/ges-pensiones/ges-pensiones.model';
import {PensionService} from '../../../../services/ges-pensiones/ges-pensiones.service';
import {GesPensionlListModel} from '../../../../models/ges-pensiones/ges-pensiones-list.model';
@Component({
    selector: 'ngx-asistencia-alumno',
    templateUrl: './asistencia-alumno.component.html',
    styleUrls: ['./asistencia-alumno.component.scss'],
  })
  export class AsistenciaAlumnoComponent {
    idCabecera:any;
    cars:any[];
    val2: string = 'asistio';
    constructor(private modalService: NgbModal,private route: ActivatedRoute) {
                
                route.params.subscribe(
                    data => {
                        this.idCabecera = data.id;                     
                    },
                );
                this.cars = [
                    { fila: '1', codigo: '20090727',alumno:"ROBERT TEODORO ARCE APAZA"},
                    { fila: '2', codigo: '2020727',alumno:"JULIO GOMEZ BOBADILLA"},
                    { fila: '3', codigo: '20010225',alumno:"MAURICIO MALDONADO PORTILLA"},
                    { fila: '4', codigo: '3009027',alumno:"ALEX BEJARANO"},
                    { fila: '5', codigo: '10090727',alumno:"ANDRES CONDORI HUARCA"},
                    { fila: '6', codigo: '40090745',alumno:"NICOLAS HERENCIA CASTRO"}
                ];
    }
    ngOnInit(): void {
      
    }
   
 
    }
    