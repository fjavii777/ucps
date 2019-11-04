import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
//import {GesPensionModel} from '../../../../models/ges-pensiones/ges-pensiones.model';
//import {PensionService} from '../../../../services/ges-pensiones/ges-pensiones.service';
//import {GesPensionlListModel} from '../../../../models/ges-pensiones/ges-pensiones-list.model';
import {AlumnoNotasModel} from '../../../../models/ges-nota/alumno-notas.model';
import { AlumnoListNotasService } from '../../../../services/ges-notas/alumno-listnotas.service';

@Component({
    selector: 'ngx-nota-alumno',
    templateUrl: './nota-alumno.component.html',
    styleUrls: ['./nota-alumno.component.scss'],
  })
  export class NotaAlumnoComponent {
    idCur:any;
    tipnot:any;
    nombres:string;
    loading = false;
    listaAlumnosNotas: AlumnoNotasModel[]=[];
    cars:any[]
    
    constructor(private modalService: NgbModal,private route: ActivatedRoute, private AlumnoListNotasService:AlumnoListNotasService) {
      this.cars = [
        {"aludni":"22334455","curid":"16","tipnottipo":"1","notval":"88"},
        {"aludni":"22334455","curid":"16","tipnottipo":"2","notval":"12"},
        {"aludni":"22334455","curid":"16","tipnottipo":"3","notval":"14"},
        
        {"aludni":"33445566","curid":"16","tipnottipo":"1","notval":"66"},
        {"aludni":"33445566","curid":"16","tipnottipo":"2","notval":"11"},
        {"aludni":"33445566","curid":"16","tipnottipo":"3","notval":"19"},
        
        {"aludni":"22334458","curid":"16","tipnottipo":"1","notval":"77"},
        {"aludni":"22334458","curid":"16","tipnottipo":"2","notval":"20"},
        {"aludni":"22334458","curid":"16","tipnottipo":"3","notval":"10"}
      ]; 
                route.params.subscribe(
                    data => {
                        this.idCur = data.curid;
                        this.tipnot = data.tipnottipo;
                    },
                );                
    }

    ngOnInit(): void {
        this.listarAlumnoNotas();
        console.log("id del curso ",this.idCur);
        console.log("id del tipo de nota ",this.tipnot);        
    }
    
    listarAlumnoNotas() {
      this.loading = true;
      this.AlumnoListNotasService.getListarNotasAlumnos(this.idCur,this.tipnot)
        .subscribe(res => {
          this.listaAlumnosNotas= res;
          this.loading = false; 
          console.log("Notas alumnos ",this.listaAlumnosNotas);     
        });
    }

    actualizarListNotas(posicion, descripcion) {
      this.listaAlumnosNotas[posicion].notval = descripcion.value;
      console.log(this.listaAlumnosNotas[posicion].notval);
    }

    subirNotas(){
      this.loading = true;
      this.AlumnoListNotasService.saveNotasAlumnos(this.listaAlumnosNotas).subscribe(//--listaAlumnosNotas
        resp => {
          this.loading = false;
        },
        err => {
          console.log(err);
        });      
      console.log("Nota guardada exitosamente "); 

    }   
    
 
}
    