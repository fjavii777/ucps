import {Component,Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { AlumnoDocenteService } from '../../../../services/ges-asistencia/alumno-docente.service';
import { AlumnoDocenteModel } from '../../../../models/ges_asistencia/alumno-docente.model';
@Component({
    selector: 'ngx-asistencia-alumno',
    templateUrl: './asistencia-alumno.component.html',
    styleUrls: ['./asistencia-alumno.component.scss'],
  })
  export class AsistenciaAlumnoComponent {
    idCur:any;
    idPro:any;
    dnido:any;
    loading = false;
    alumnoDocentelist:AlumnoDocenteModel[]=[];
    cars:any[];
    @Input() public myInputVariable: string;
    

    val2: string = 'asistio';
    constructor(private modalService: NgbModal,private route: ActivatedRoute,
                private alumnoDocenteService:AlumnoDocenteService ) {
                
                route.params.subscribe(
                    data => {
                        this.idCur = data.idcur; 
                        this.idPro = data.idpro;
                        this.dnido = data.dni;
                    },
                );
             
    }
    ngOnInit(): void {
        this.listarAlumnoDocente();
        console.log(this.idCur+this.idPro+this.dnido);

    }

    listarAlumnoDocente() {
        this.loading = true;
        this.alumnoDocenteService.getListarAlumnoDocente(this.dnido,this.idPro,this.idCur)
          .subscribe(res => {
            this.alumnoDocentelist= res;
            
          });
      }
 
    }
    