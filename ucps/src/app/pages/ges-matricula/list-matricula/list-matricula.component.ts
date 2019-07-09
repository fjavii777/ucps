import {Component, OnInit , Output, EventEmitter} from '@angular/core';
import {GesMatriculaListaProgramaModel} from '../../../models/ges-matricula/ges-matricula-listaprograma.model';
import {MatriculaListaProgramaService} from '../../../services/ges-matricula/matriculaListaPrograma.service';
import { SmartTableData } from '../../../@core/data/smart-table';
import { LocalDataSource } from 'ng2-smart-table';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalUpdateMatriculaComponent} from './modal-update-matricula/modal-update-matricula.component';
import {CursoService} from '../../../services/ges-curso/curso.service';
import {HorarioService} from '../../../services/ges-horario/horario.service';
import {GesCursoReadModel} from '../../../models/ges-curso/ges-curso-read.model';
import {GesHorarioReadProgramaModel} from '../../../models/ges-horario/ges-horario-read.model';
@Component({
    selector: 'ngx-list-matricula',
    styleUrls: ['./list-matricula.component.scss'],
    templateUrl: './list-matricula.component.html',
})
export class ListMatriculaComponent implements OnInit  {
  cols: any[];
  loading = false;
  listaHorarioPrograma:any[];
  listacurso:GesCursoReadModel[] = [];
  listahorario:GesHorarioReadProgramaModel[] = [];
  listMatriculaDetalle: GesMatriculaListaProgramaModel[] = [];
  listaPrograma: GesMatriculaListaProgramaModel;
  constructor(private modalService: NgbModal,
              private matdetaleservice: MatriculaListaProgramaService ,
              private cursoService: CursoService,
              private horarioService: HorarioService
              ) {
                this.listaHorarioPrograma=[];
  }
  ngOnInit(): void {
    this.listarAlumnos();
    this.cols = [
      { field: 'AlCod', header: 'DNI ALUMNO' },
      { field: 'CurDes', header: 'PROGRAMA' },
      { field: 'MatDetMonPag', header: 'MONTO' },
      { field: 'GenCodMos', header: 'TURNO' },
  ];
    this.listarCurso();
    this.listarHorario();
  }
  selectCarWithButton(lisprog: GesMatriculaListaProgramaModel) {
    this.listaPrograma = lisprog;
    const modalR = this.modalService.open(ModalUpdateMatriculaComponent, {
      size: 'lg',
    });
    modalR.componentInstance.listaMatriculaAlumnoSeleccionado = this.listaPrograma;
    modalR.componentInstance.nombrescompletos =
      this.listaPrograma.AlNom + ' ' +
      this.listaPrograma.AlPePat + ' ' +
      this.listaPrograma.AlPeMat;
    modalR.componentInstance.horario =
      this.listaPrograma.GenCodMos + ' (' +
      this.listaPrograma.HorHorIni + ' - ' +
      this.listaPrograma.HorHorFin + ' )';
    modalR.componentInstance.listaCursos=this.listacurso;
    modalR.componentInstance.listahorario=this.listahorario;
    modalR.result.then(result => {
      if (result) {
        this.listarAlumnos();
      } else {
      }
    }).catch((res) => {});
  }
  listarAlumnos() {
    this.loading = true;
    this.matdetaleservice.getListarMatriculaPrograma()
      .subscribe(res => {
        console.log(res);
        this.listMatriculaDetalle = res;
        this.loading = false;
        const data = this.listMatriculaDetalle;
        this.source.load(data);
      });
  }
  listarCurso() {
    this.cursoService.getListarCursos()
      .subscribe(res => {
        console.log(res);
        this.listacurso = res;
      });
  }
  listarHorario() {
    this.horarioService.getListarHorario()
      .subscribe(res => {

        for(var j=0 ; j<res.length;j++){
          this.listaHorarioPrograma.push({
            horid : res[j].horid,
            mihorario:res[j].gencodmos+ "("+res[j].horhorini+"-"+res[j].horhorfin+")"      
          });
        }
        this.listahorario = this.listaHorarioPrograma;
      });
  }
  btnAddAlumno() {
    const modalR = this.modalService.open(ModalUpdateMatriculaComponent, { size: 'lg'});
    modalR.result.then(result => {
      if (result) {
      } else {
      }
    }).catch((res) => {});
  }
  settings = {
    columns: {
      edit: {
        title: '<h1>Hola</h1>>',
        type: 'html',
      },
      AlCod: {
        title: 'DNI DEL ALUMNO',
        type: 'number',
      },
      CurDes: {
        title: 'PROGRAMA',
        type: 'string',
      },
      GenCodMos: {
        title: 'MONTO',
        type: 'string',
      },
      MatDetNomBan: {
        title: 'BANCO',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}




