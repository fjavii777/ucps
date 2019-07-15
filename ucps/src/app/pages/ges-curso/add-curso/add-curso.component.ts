import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
import {UtilsService} from '../../../services/utils.service';
import {Observable} from 'rxjs';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {CursoService} from '../../../services/ges-curso/curso.service';
import {GesCursoReadModel} from '../../../models/ges-curso/ges-curso-read.model';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'ngx-add-curso',
  styleUrls: ['./add-curso.component.scss'],
  templateUrl: './add-curso.component.html',
})
export class AddCursoComponent implements OnInit {
  loading = false;
  listCurso: GesCursoReadModel[] = [];
  modalref: NgbModalRef;

  constructor(private modalService: NgbModal,
              private cursoservice: CursoService) {
  }
  ngOnInit(): void {
  }
  

}




