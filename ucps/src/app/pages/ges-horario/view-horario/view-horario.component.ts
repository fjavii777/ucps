import {Component, OnInit} from '@angular/core';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'ngx-view-horario',
  styleUrls: ['./view-horario.component.scss'],
  templateUrl: './view-horario.component.html',
})
export class ViewHorarioComponent implements OnInit {
  loading = false;

  constructor() {
  }
  ngOnInit(): void {
  }
  

}




