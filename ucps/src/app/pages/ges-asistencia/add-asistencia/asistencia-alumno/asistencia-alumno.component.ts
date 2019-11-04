import {Component,Input} from '@angular/core';
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

@Component({
    selector: 'ngx-asistencia-alumno',
    templateUrl: './asistencia-alumno.component.html',
    styleUrls: ['./asistencia-alumno.component.scss'],
    providers: [DatePipe]
  })
  export class AsistenciaAlumnoComponent {
    curDate=new Date();
    idCur:any;
    idPro:any;
    dnido:any;
    tipobol:any;
    programa:string;
    curso:string;
    tamañoLista:number;
    existennciaAlum:AsistencaAlumnoModificarModel;
    updateListAsist:AsistenciaModificarModel;

    nombres:string;
    loading = false;
    listDatAsis : AsistencaDatodModel;
    alumnoDocentelist:AlumnoDocenteModel[]=[];
    cars:any[];
    lista: any[];
    val1: string ='Option 2';
    val2: string ='Option 2';
    alumnodocente : AlumnoAsistDocenteModel;
    listaAsistencia:AlumnosAsistencia[];
    listarAsist : any[]; 
    
   
    
    @Input() public myInputVariable: string;
    checked: boolean = false;
    

    constructor(private modalService: NgbModal,private route: ActivatedRoute,
                private alumnoDocenteService:AlumnoDocenteService , private alumnoDatosService:AsistenciaDatosService
                ,private datePipe: DatePipe) {
                route.params.subscribe(
                    data => {
                        this.idCur = data.idcur; 
                        this.idPro = data.idpro;
                        this.dnido = data.dni;
                    },
                );
                var d = new Date();
                var dateDay = new Date().getDay();
                this.lista =[];
                this.listarAsist=[]; 
                this.listaAsistencia=[];              
    }
    
    ngOnInit(): void {
        this.listarDatAsis();
        this.listarAlumnoDocente();
        
        

    }

    listartAsistencia(){
      for(var i = 0 ; i < this.alumnoDocentelist.length ; i++  ){
        this.lista[i] = '0';
        this.alumnoDocentelist[i].alufil=i+1;      
      } 
    }
    crearListaAsistencia(alumnosAsist:AlumnoAsistDocenteModel){
      this.alumnoDatosService.postCrearAsistenciaAlumno(alumnosAsist).subscribe(
        resp => {
          
        },
        err => {
          console.log(err);
        });
    }

    

    updateListaAsistencia(alumnosAsist:AsistenciaModificarModel){
      this.alumnoDatosService.putModificarAsistencia(alumnosAsist).subscribe(
        resp => {
          
        },
        err => {
          console.log(err);
        });
    }
    existeAsistenciaActual(idcur:any,dni:any,pro:any,fech:any)
    {
      this.existennciaAlum = new AsistencaAlumnoModificarModel();
      this.existennciaAlum.curid=idcur;
      this.existennciaAlum.docdni=dni;
      this.existennciaAlum.proid=pro;
      this.existennciaAlum.fecha=fech;
      this.alumnoDatosService.postExisteAsistencia(this.existennciaAlum).subscribe(
        resp => { 
          console.log("BOOOOLL",resp);  
          this.tipobol = false;
          var boolValue = (/true/i).test(Object(resp.result));
          this.listaAsistencia = this.listarAsist;
          if(boolValue){
            console.log("MODIFIQUE");
            this.updateListAsist=new AsistenciaModificarModel();
            this.updateListAsist.docdni=this.dnido;
            this.updateListAsist.curid = this.idCur;
            this.updateListAsist.fecha =fech;
            this.updateListAsist.estdocasis="1";
            this.updateListAsist.alumnos=this.listaAsistencia;
            this.updateListaAsistencia(this.updateListAsist);

          }else{
            
            this.alumnodocente = new  AlumnoAsistDocenteModel();
            this.alumnodocente.curid=this.idCur;
            this.alumnodocente.docdni=this.dnido;
            this.alumnodocente.proid=this.idPro;
            this.alumnodocente.alumnos = this.listaAsistencia;
            this.crearListaAsistencia(this.alumnodocente); 
          }
        },
        err => {
          console.log(err);
        });
   
    } 

    btn_clickAgregarAsistencia(){
      this.listarAsist =[];
      this.listaAsistencia = new AlumnosAsistencia()[this.alumnoDocentelist.length];
      for(var i=0 ; i < this.alumnoDocentelist.length;i++){
        this.listarAsist.push({
          aludni :  this.alumnoDocentelist[i].aludni,
          aluasi :  this.alumnoDocentelist[i].altipoasis?"1":"0"
        });
      }
      var mifecha = this.datePipe.transform(this.curDate, 'yyyy-MM-dd');
      this.existeAsistenciaActual(this.idCur,this.dnido,this.idPro,mifecha);
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


      var mifecha = this.datePipe.transform(this.curDate, 'yyyy-MM-dd');
      this.existennciaAlum = new AsistencaAlumnoModificarModel();
      this.existennciaAlum.curid=this.idCur;
      this.existennciaAlum.docdni=this.dnido;
      this.existennciaAlum.proid=this.idPro;
      this.existennciaAlum.fecha=mifecha ;
      this.loading = true;
      this.alumnoDatosService.postExisteAsistencia(this.existennciaAlum).subscribe(
        resp => {   
          var boolValue = (/true/i).test(Object(resp.result));
          this.listaAsistencia = this.listarAsist;
          if(boolValue){
            this.alumnoDocenteService.getListarAlumnoDocente(this.dnido,this.idCur,mifecha)
            .subscribe(res => {
  
              this.alumnoDocentelist= res;            
              this.listartAsistencia();
              console.log("YA EXISTE");       
            });
          }else{
            this.alumnoDocenteService.getListarAlumnosDocentes(this.dnido,this.idPro,this.idCur)
            .subscribe(res => {
              this.alumnoDocentelist= res;
              for(var i=0;i<this.alumnoDocentelist.length;i++){
                this.alumnoDocentelist[i].altipoasis=true;
              }
              this.listartAsistencia();       
            });
          }
        },
        err => {
          console.log(err);
        });
      
      
      }
    }
    