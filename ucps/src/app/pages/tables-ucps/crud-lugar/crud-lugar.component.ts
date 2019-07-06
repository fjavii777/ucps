import { Component, OnInit } from '@angular/core';
import { WikisService } from '../../../services/wikis.service';
import {Wiki} from '../../../models/wikis.modeL';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../../@core/data/smart-table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
@Component({
    selector: 'ngx-crud-lugar-git',
    templateUrl: './crud-lugar.component.html',
    styles: [`
    nb-card {
        transform: translate3d(0, 0, 0);
    }
`],
})
export class Crudlugarcomponent implements OnInit {
    lugar:Wiki[];
    constructor(private wikiService: WikisService,private service: SmartTableData,private modalService: NgbModal) {
      
     }
        ngOnInit() {
            // console.log("asdadsadas");
            this.wikiService.readPolicies().subscribe((lugar: Wiki[])=>{
                this.lugar = Object(lugar);
                console.log(lugar);
                //const data = this.service.getData();
                const data = this.lugar;
                this.source.load(data);
        })
    }
  
        
    settings = {
        add: {
          addButtonContent: '<i class="nb-plus"></i>',
          createButtonContent: '<i class="nb-checkmark"></i>',
          cancelButtonContent: '<i class="nb-close"></i>',
        },
        edit: {
          editButtonContent: '<i class="nb-edit"></i>',
          saveButtonContent: '<i class="nb-checkmark"></i>',
          cancelButtonContent: '<i class="nb-close"></i>',
        },
        delete: {
          deleteButtonContent: '<i class="nb-trash"></i>',
          confirmDelete: true,
        },
        columns: {
          authorName: {
            title: 'Autor',
            type: 'string',
          },
          authorEmail: {
            title: 'Correo',
            type: 'string',
          },
          authorDate: {
            title: 'Fecha',
            type: 'string',
          },
          authorDateRelative: {
            title: 'Dia',
            type: 'string',
          },
          subject: {
            title: 'Modificacion',
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
