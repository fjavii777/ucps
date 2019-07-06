import { Component, OnInit } from '@angular/core';
import { RepositorService } from '../../../services/repositor.service';
import {Branchs,Repositorio} from '../../../models/repositorio.model';
import { NbDialogService } from '@nebular/theme';
import {ModalRequisitosComponent} from './modal-requisitos/modal-requisitos.component';
import * as moment from 'moment';

export interface CasoUso {
  code: string;
  acronimo: string;
}

@Component({
  selector: 'ngx-informe-git',
  styleUrls: ['./informe.component.scss'],
  templateUrl: './informe.component.html',
})
export class InformeComponent implements OnInit {
  listbranches: Branchs = new Branchs();
  starRate = 2;
  heartRate = 4;
  opcionBusqueda :any;
  radioGroupValue = 'This is value 2';
  listaReqFuncional:any;
  listaTotalPushed :any;

  listCasoUso:CasoUso[];
  constructor(private repositorService:RepositorService,private dialogService: NbDialogService) { 
  
    this.listaReqFuncional=[];
    this.listaTotalPushed=[];
    this.listCasoUso = [
      {code: 'CU001',acronimo:'Ges_Vis_Alu'},
      {code: 'CU002',acronimo:'Ges_Vis_Alu'},
      {code: 'CU003',acronimo:'Ges_Vis_Alu'},
      {code: 'CU004',acronimo:'Ges_Vis_Alu'},
      {code: 'CU005',acronimo:'Ges_Vis_Alu'},
      {code: 'CU007',acronimo:'Ges_Vis_Alu'},
      {code: 'CU008',acronimo:'Ges_Vis_Alu'},
      {code: 'CU009',acronimo:'Ges_Vis_Alu'},
      {code: 'CU0010',acronimo:'Ges_Vis_Alu'},     
];

  }
  open(ca:string,re:string) {
    console.log(ca);
    console.log(re);
    this.filraraqlCasoReq(ca,re);  
    this.dialogService.open(ModalRequisitosComponent, {  
      context: {
        title: 'REQUERIMIENTOS FUNCIONALES',
        casoUsoF :ca,
        requeF :re,
        listarReqCas :this.listaReqFuncional,
      },      
    });
  }
  ngOnInit() {
    this.listar();
    this.listarBranches();
  }
  filraraqlCasoReq(ca:string,re:string){
    this.listaReqFuncional = this.listaTotalPushed.filter((r:any) => r.rama == re && r.commit_title==ca);
    console.log('listaReqFuncional',this.listaReqFuncional);
    //this.dataSource =  this.lista_author_username;
  }
  listar(){
    this.repositorService.ListReposit()
    .subscribe(user => { 
      console.log("Hola"); 
        var ayuda =Object(user);
        for(var j=0 ; j<ayuda.length;j++){
          this.listaTotalPushed.push({
              created_at :  moment(ayuda[j].created_at).format('MM/DD/YYYY'),
              Hora : moment(ayuda[j].created_at).format('HH:mm'),
              title: ayuda[j].push_data.commit_title?(ayuda[j].push_data.commit_title).substring(8,(ayuda[j].push_data.commit_title).length):null,
              author_username: ayuda[j].author_username,
              author: ayuda[j].author,
              commit_title: ayuda[j].push_data.commit_title?(ayuda[j].push_data.commit_title).substring(0,5):null,
              estado_commit: ayuda[j].push_data.commit_title?(ayuda[j].push_data.commit_title).substring(6,7):null,
              rama :ayuda[j].push_data.ref,
              push_data3 :ayuda[j].push_data,
              Todos : '-'  
          });
        }
        console.log('listatotal',this.listaTotalPushed);
    },error => {
     // this.mensaje = "Hubo un error conectandose al servidor";        
      //this.load=false;
      console.log("Llegue asta aqui");  
      console.log(error.message);
    });          
  }
  listarBranches() {
    this.repositorService.ListBranches()
      .subscribe(branch => {
        console.log('branches', branch);
        for(var j=0 ; j<Object(branch).length-1;j++){
          this.listaReqFuncional.push({
            name : String(Object(branch)[j].name)? String(Object(branch)[j].name).substring(0,4):null,
            title: Object(branch)[j].commit.title,
            author_name:Object(branch)[j].commit.author_name              
          });
        }

          console.log(this.listaReqFuncional);
        //this.listbranches = branch;
      },error => {
        console.log("Llegue asta aqui");
        console.log(error.message);
      });
  }






}




