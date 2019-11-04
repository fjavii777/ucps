import {Component,Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { AlumnoDocenteService } from '../../../../services/ges-asistencia/alumno-docente.service';
import { AsistenciaDatosService } from '../../../../services/ges-asistencia/asistencia-datos.service';
import { AlumnoDocenteModel } from '../../../../models/ges_asistencia/alumno-docente.model';
import { AsistencaDatodModel } from '../../../../models/ges_asistencia/asistencia-datos.model';
import { AlumnosAsistencia, AlumnoAsistDocenteModel } from '../../../../models/ges_asistencia/asistencias-alumno.model';
import { AsistencaAlumnoModificarModel } from '../../../../models/ges_asistencia/asistencia-alumno-modificar.model';
import { DatePipe } from '@angular/common';
import { AsistenciaModificarModel } from '../../../../models/ges_asistencia/asistencia-modificar.model';
import { ProgramaDocenteModel } from '../../../../models/ges_asistencia/programa-docente';
import { ProgramaDocenteService } from '../../../../services/ges-asistencia/programadocente.service';
import { CursoDocenteModel } from '../../../../models/ges_asistencia/curso-docente.model';
import { CursoDocenteService } from '../../../../services/ges-asistencia/cursodocente.service';

@Component({
    selector: 'ngx-asistencia-detalle',
    templateUrl: './asistencia-detalle.component.html',
    styleUrls: ['./asistencia-detalle.component.scss'],
    providers: [DatePipe]
  })
  export class AsistenciaDetalleComponent implements OnInit {
    idCur:any;
    idPro:any;
    dnido:any; 
    datee:any;
    selectedDocente:any;
    date11:any;
    selectedPrograma:any;
    alumnoDocentelist:AlumnoDocenteModel[]=[];
    selectedCurso :any;
    listaProgramaDocente: ProgramaDocenteModel []=[];
    listaCursoDocente: CursoDocenteModel []=[];
    constructor(private route: ActivatedRoute,private datePipe: DatePipe, private alumnoDocenteService:AlumnoDocenteService,private programadocenteservice:ProgramaDocenteService,private cursodocenteservice:CursoDocenteService) {
            route.params.subscribe(
                data => {
                    this.dnido = data.dni;
                },
            );         
    }
    ngOnInit(): void {
        //this.listarAlumnosCursos();
        this.listarProgramaDocente();
    }
    listarProgramaDocente() {
        // this.loading = true;
         this.programadocenteservice.getListarProgramaDocente('65881477')
           .subscribe(res => {
             this.listaProgramaDocente = res;
             console.log("LISTA",this.listaProgramaDocente);
           });
     }
    listarAlumnosCursos(){
        this.alumnoDocenteService.getListarAlumnosDocentes(this.dnido,this.idPro,this.idCur)
            .subscribe(res => {
              this.alumnoDocentelist= res;
              for(var i=0;i<this.alumnoDocentelist.length;i++){
                this.alumnoDocentelist[i].altipoasis=true;
              }     
            });
    }

    btn_clickAgregarAsistencia(){        

        console.log("este Programa",this.selectedPrograma.proid);
        console.log("este Curso",this.selectedCurso.idCurso);
        console.log("esta Fecha",this.date11);
        this.alumnoDocenteService.getListarAlumnoDocente(this.dnido,this.selectedCurso.idCurso,this.date11)
        .subscribe(res => {
          this.alumnoDocentelist= res;                 
        });
    }
    listarCursoDocente(){
        console.log(this.selectedCurso.idCurso);
    }

    seleccionPrograma(){
        
        this.listarCursosDocente(this.selectedPrograma.proid);
    }
    listarCursosDocente(codPro:any){
        this.cursodocenteservice.getListarCursoDocente('65881477',codPro)
        .subscribe(res => {
        this.listaCursoDocente = res;
        for(var i=0;i<this.listaCursoDocente.length;i++){
            this.listaCursoDocente[i].idCurso=i+1;
             //this.listaHorario = this.listaCursoDocente[i].horario;
        }
        //console.log("Mis Listas",this.listaCursoDocente);
        });
    }
  


    }
    