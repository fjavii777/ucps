import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import {HorarioService} from '../../../../../services/ges-horario/horario.service';
import {GesHorarioReadProgramaModel} from '../../../../../models/ges-horario/ges-horario-read.model';
import {
  GesMatriculaDetalleDTO,
  GesMatriculaDetalleModel,
} from '../../../../../models/ges-matricula/ges-matricula-detalle.model';
import {UtilsService} from '../../../../../services/utils.service';
import {MatriculaDetalleService} from '../../../../../services/ges-matricula/matriculaDetalle.service';
@Component({
  selector: 'ngx-modal-mat-detalle',
  styleUrls: ['./modal-det-cab.component.scss'],
  templateUrl: './modal-det-cab.component.html',
})
export class ModalDetCabComponent implements OnInit {
  listHorarios: GesHorarioReadProgramaModel[] = [];
  titulo = 'Agregar Detalle Matricula';
  boton = 'Guardar';
  flagIsModificar = false;
  loadingGuardar = false;
  public myformdetalle: FormGroup;
  detalleToSend: GesMatriculaDetalleDTO = new GesMatriculaDetalleDTO();
  constructor(private fb: FormBuilder,
              public activeModal: NgbActiveModal,
              private utilService: UtilsService,
              private matriculadetalleservice: MatriculaDetalleService,
              private horarioservice: HorarioService,
  ) {
    this.myformdetalle = this.fb.group({
      formidcabecera: [null, Validators.required],
      formiddetalle: [null, Validators.required],
      formidhorario: [null, Validators.required],
      formbanco: [null, Validators.required],
      formcodpago: [null, Validators.required],
      formmontopago: [null, Validators.required],
      formfecha: [{value: this.utilService.getDateNow(), disabled: true}],
      formobs: ['', Validators.required],
      formestreg: [null, Validators.required],
    });
  }
  ngOnInit(): void {
    this.listarHorarios();
  }
  listarHorarios() {
    this.horarioservice.getListarHorario()
      .subscribe(res => {
        this.listHorarios = res;
        // this.loading = false;
      });
  }
  btn_clickAceptar() {
    this.passFormToObject();
    this.loadingGuardar = true;
    if (this.flagIsModificar) {
      console.log(this.detalleToSend);
      this.matriculadetalleservice.putModificarDetalle(this.detalleToSend).subscribe(
        resp => {
          this.activeModal.close(true);
        },
        err => {
          console.log(err);
        });
    } else {
      this.detalleToSend.matdetestreg = 'A';
      this.matriculadetalleservice.postCrearMatriculaDetalle(this.detalleToSend).subscribe(
        resp => {
          this.activeModal.close(true);
        },
        err => {
          console.log(err);
        });
    }
  }
  passFormToObject() {
    this.detalleToSend.matcabid = this.myformdetalle.get('formidcabecera').value;
    this.detalleToSend.matdetid = this.myformdetalle.get('formiddetalle').value;

    this.detalleToSend.matdetfkhor = this.myformdetalle.get('formidhorario').value;
    this.detalleToSend.matdetnomban = this.myformdetalle.get('formbanco').value;
    this.detalleToSend.matdetcodpag = this.myformdetalle.get('formcodpago').value;
    this.detalleToSend.matdetmonpag = this.myformdetalle.get('formmontopago').value;
    this.detalleToSend.matdetfec = this.myformdetalle.get('formfecha').value;
    this.detalleToSend.matdetobs = this.myformdetalle.get('formobs').value;
    this.detalleToSend.matdetestreg = this.myformdetalle.get('formestreg').value;

  }
  iniciarFormulario(idcabecera: string, isactualizar: boolean, detalle: GesMatriculaDetalleModel) {
   this.cambiarTodoAModificar(isactualizar, detalle);
   this.myformdetalle.controls['formidcabecera'].setValue(idcabecera);
    // this.myformdetalle.controls['formiddetalle'].setValue();
  }
  cambiarTodoAModificar(isModificar: boolean, detalle: GesMatriculaDetalleModel) {
    this.flagIsModificar = isModificar;
    if (isModificar) {
      this.titulo = 'Modificar Detalle';
      this.boton = 'Modificar';
      this.myformdetalle.controls['formiddetalle'].setValue(detalle.matdetid);
      this.myformdetalle.controls['formidhorario'].setValue(detalle.matdetfkhor);
      this.myformdetalle.controls['formbanco'].setValue(detalle.matdetnomban);
      this.myformdetalle.controls['formcodpago'].setValue(detalle.matdetcodpag);
      this.myformdetalle.controls['formmontopago'].setValue(detalle.matdetmonpag);
      this.myformdetalle.controls['formfecha'].setValue(detalle.matdetfec);
      this.myformdetalle.controls['formobs'].setValue(detalle.matdetobs);
      this.myformdetalle.controls['formestreg'].setValue(detalle.matdetestreg);
    } else {
      this.titulo = 'Crear Detalle';
      this.boton = 'Crear';
    }
  }
}
