import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
//import {AlumnoService} from '../../../services/ges-usu/alumno.service';
//import {DeleteAlumnoModel, GesUsuAlumnoModel} from '../../../models/ges-usu/ges-usu-alumno.model';
import { DocenteListCursosModel } from '../../../models/ges-nota/docente-cursos.model';
import { DocenteListCursosService } from '../../../services/ges-notas/docente-listcursos.service';

@Component({
  selector: 'ngx-list-curso',
  styleUrls: ['./list-curso.component.scss'],
  templateUrl: './list-curso.component.html',
})
export class ListCursoComponent implements OnInit {
 
  cars:any[];
  loading = false;
  listaCursosDocente: DocenteListCursosModel[]=[];


  constructor(private router: Router, private docentelistcursoservice:DocenteListCursosService) {
    this.cars = [
      { fila: '1',pronom:'COCINA',curnom:'GASTRONOMIA-EDUCACION',turnom:'turno2'},
      { fila: '2',pronom:'COCINA',curnom:'EDUCACION',turnom:'turno1'},
      { fila: '3',pronom:'COCINA',curnom:'GASTRONOMIA',turnom:'turno1'},
      { fila: '4',pronom:'COCINA',curnom:'GASTRONOMIA',turnom:'turno3'},
      { fila: '5',pronom:'COCINA',curnom:'GASTRONOMIA',turnom:'turno2'},
      { fila: '6',pronom:'ELECTRÓNICA',curnom:'REDES',turnom:'turno1'}
  ];
  }
  ngOnInit(): void {

    this.listarCursosDocente();

  }

  listarCursosDocente() {
    this.loading = true;
    this.docentelistcursoservice.getListarCursosDocente('65881477')
      .subscribe(res => {
        this.listaCursosDocente = res;//res
        this.loading = false;
        console.log("Curso docentes ",this.listaCursosDocente);
      });
  }



  ingresarNotasCurso(curid: number,tipnottipo: number) {
    this.router.navigate(['/pages/ges-nota/curso/' + curid+'/'+tipnottipo ]);
  }
  
}




