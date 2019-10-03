import {Component,Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { AlumnoDocenteService } from '../../../../services/ges-asistencia/alumno-docente.service';
import { AsistenciaDatosService } from '../../../../services/ges-asistencia/asistencia-datos.service';
import { AlumnoDocenteModel } from '../../../../models/ges_asistencia/alumno-docente.model';
import { AsistencaDatodModel } from '../../../../models/ges_asistencia/asistencia-datos.model';

@Component({
    selector: 'ngx-asistencia-alumno',
    templateUrl: './asistencia-alumno.component.html',
    styleUrls: ['./asistencia-alumno.component.scss'],
  })
  export class AsistenciaAlumnoComponent {
    idCur:any;
    idPro:any;
    dnido:any;
    programa:string;
    curso:string;
    nombres:string;
    loading = false;
    listDatAsis : AsistencaDatodModel;
    alumnoDocentelist:AlumnoDocenteModel[]=[];
    cars:any[];
    val1: string;
    val2: string = 'val2';
    @Input() public myInputVariable: string;
    

    constructor(private modalService: NgbModal,private route: ActivatedRoute,
                private alumnoDocenteService:AlumnoDocenteService , private alumnoDatosService:AsistenciaDatosService) {
                  this.val2 = 'val2';
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
        this.listarDatAsis();
        console.log(this.idCur+this.idPro+this.dnido);

    }
    
    listarDatAsis() {
      this.loading = true;
      this.alumnoDatosService.getListarAsistenciaDatos(this.dnido,this.idPro,this.idCur)
        .subscribe(res => {
          this.listDatAsis= res;      
          this.nombres = res.docnom + " " + res.docapepat + " " + res.docapemat;
          this.curso = res.curnom;
          this.programa = res.pronom;
        });
    }

    listarAlumnoDocente() {
        this.loading = true;
        this.alumnoDocenteService.getListarAlumnoDocente(this.dnido,this.idPro,this.idCur)
          .subscribe(res => {
            this.alumnoDocentelist= res;
            console.log("mostrar : ",this.alumnoDocentelist);          
          });
      }
    }
    