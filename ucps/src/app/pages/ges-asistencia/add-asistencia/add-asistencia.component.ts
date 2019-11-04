import {Component, OnInit, EventEmitter, Input} from '@angular/core';
import {Router} from '@angular/router';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {AlumnoService} from '../../../services/ges-usu/alumno.service';
import {DeleteAlumnoModel, GesUsuAlumnoModel} from '../../../models/ges-usu/ges-usu-alumno.model';
import { ProgramaDocenteService } from '../../../services/ges-asistencia/programadocente.service';
import { ProgramaDocenteModel } from '../../../models/ges_asistencia/programa-docente';
import { CursoDocenteService } from '../../../services/ges-asistencia/cursodocente.service';
import { CursoDocenteModel, Horario } from '../../../models/ges_asistencia/curso-docente.Model';
import { DebugContext } from '@angular/core/src/view';
import { AsistenciaAlumnoComponent } from './asistencia-alumno/asistencia-alumno.component';

@Component({
  selector: 'ngx-add-asistencia',
  styleUrls: ['./add-asistencia.component.scss'],
  templateUrl: './add-asistencia.component.html',
})
export class AddAsistenciaComponent implements OnInit {
  cars:any[];
  cont:number=0;
  loading = false;
  selectedPrograma:any;
  listaProgramaDocente: ProgramaDocenteModel []=[];
  listaCursoDocente: CursoDocenteModel []=[];
  listaHorario : Horario[]=[];
  
  constructor(private router: Router,private programadocenteservice:ProgramaDocenteService, private cursodocenteservice:CursoDocenteService)  {
    this.cont=1;
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
    
    this.listarProgramaDocente();
  
  
  }
  listarProgramaDocente() {
    this.loading = true;
    this.programadocenteservice.getListarProgramaDocente('65881477')
      .subscribe(res => {
        this.listaProgramaDocente = res;
      });
  }
  seleccionPrograma(){
    console.log(this.selectedPrograma.proid);
    this.listarCursosDocente(this.selectedPrograma.proid);
  }
  listarCursosDocente(codPro:any) {
    this.loading = true;
    this.cursodocenteservice.getListarCursoDocente('65881477',codPro)
      .subscribe(res => {
        this.listaCursoDocente = res;
        for(var i=0;i<this.listaCursoDocente.length;i++){
           this.listaCursoDocente[i].idCurso=i+1;
           this.listaHorario = this.listaCursoDocente[i].horario;
        }
        
        console.log("Mis Listas",this.listaCursoDocente);
      });
  }
 
  abrirDetallesAsistencia(idcur:number) {
        
        this.router.navigate(['/pages/ges-asistencia/asistenciaalumno/'+ idcur+'/'+this.selectedPrograma.proid+"/"+"65881477"]);
  }
  abrirDetalles() {
        
    this.router.navigate(['/pages/ges-asistencia/asistenciadetalle/'+"65881477"]);
}
  
  
}




