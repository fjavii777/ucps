import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {AlumnoService} from '../../../../services/ges-usu/alumno.service';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import {SedeService} from '../../../../services/ges-sede/sede.service';
import {GesSedeModel} from '../../../../models/ges-sede/ges-sede.model';
import {ProgramaService} from '../../../../services/ges-programa/programa.service';
import {ProgramaModel} from '../../../../models/ges-matricula/programa.model';
import {MatriculaCabeceraService} from '../../../../services/ges-matricula/matriculaCabecera.service';
import {
  GesMatriculaCabeceraDTO,
  GesMatriculaCabeceraModel,
} from '../../../../models/ges-matricula/ges-matricula-cabecera.model';
@Component({
  selector: 'ngx-modal-mat-cabecera',
  styleUrls: ['./modal-mat-cab.component.scss'],
  templateUrl: './modal-mat-cab.component.html',
})
export class ModalMatCabComponent implements OnInit {
  listSedes: GesSedeModel[] = [];
  listProgramas: ProgramaModel[] = [];
  titulo = 'Agregar Cabecera Matricula';
  boton = 'Guardar';
  flagIsModificar = false;
  loadingGuardar = false;
  public myformcabecera: FormGroup;
  cabeceraToSend: GesMatriculaCabeceraDTO = new GesMatriculaCabeceraDTO();
  constructor(private fb: FormBuilder,
              public activeModal: NgbActiveModal,
              private sedeService: SedeService,
              private programaService: ProgramaService,
              private cabeceraservice: MatriculaCabeceraService,
              private alumnoservice: AlumnoService) {
    this.myformcabecera = this.fb.group({
      formmatcabid: [null, Validators.required],
      formidestudiante: [null, Validators.required],
      formidsede: [null, Validators.required],
      formidprograma: [null, Validators.required],
      formestreg: [null, Validators.required],
    });
  }
  ngOnInit(): void {
    this.listarSedes();
    this.listarProgramas();
  }
  searchAlumnoXdni = (text$: Observable<string>) => {
    return text$.filter((t: string) => t.length > 1)
      .debounceTime(200)
      .switchMap((text: string) => {
        const dni = text;
        return this.alumnoservice.postBuscarAlumnoxParteId(dni);
      });
  }
  formatearEntradaAlumnoXdni = (result: any) =>
    result.AlDni + ' - ' +
    result.AlApePat + ' ' +
    result.AlApeMat + ' ' +
    result.AlNom
  listarSedes() {
    this.sedeService.getListarSede()
      .subscribe(res => {
        this.listSedes = res;
        if (res.length > 0) {
          this.myformcabecera.controls['formidsede'].setValue('1');
        }
        // this.loading = false;
      });
  }
  listarProgramas() {
    this.programaService.getListarProgramas()
      .subscribe(res => {
        this.listProgramas = res;
        // this.loading = false;
      });
  }
  btn_clickAceptar() {
    this.passFormToObject();
    this.loadingGuardar = true;
    if (this.flagIsModificar) {
      console.log(this.cabeceraToSend);
      this.cabeceraservice.putModificarMatriculaCabecera(this.cabeceraToSend).subscribe(
        resp => {
          this.activeModal.close(true);
        },
        err => {
          console.log(err);
        });
    } else {
      this.cabeceraToSend.matcabestreg = 'A';
      this.cabeceraservice.postCrearMatriculaCabecera(this.cabeceraToSend).subscribe(
        resp => {
          this.activeModal.close(true);
        },
        err => {
          console.log(err);
        });
    }
  }
  passFormToObject() {
    if (this.flagIsModificar) {
      this.cabeceraToSend.aldni = this.myformcabecera.get('formidestudiante').value;
    } else {
      this.cabeceraToSend.aldni = this.myformcabecera.get('formidestudiante').value.AlDni;
    }
    this.cabeceraToSend.matcabid = this.myformcabecera.get('formmatcabid').value;
    this.cabeceraToSend.sedid = this.myformcabecera.get('formidsede').value;
    this.cabeceraToSend.proid = this.myformcabecera.get('formidprograma').value;
    this.cabeceraToSend.matcabestreg = this.myformcabecera.get('formestreg').value;
  }
  iniciarFormulario(matcabecera: GesMatriculaCabeceraModel) {
    this.flagIsModificar = true;
    this.titulo = 'Modificar Cabecera';
    this.boton = 'Modificar';
    this.myformcabecera.controls['formmatcabid'].setValue(matcabecera.matcabid);
    this.myformcabecera.controls['formidestudiante'].setValue(matcabecera.aldni);
    this.myformcabecera.controls['formidsede'].setValue(matcabecera.sedid);
    this.myformcabecera.controls['formidprograma'].setValue(matcabecera.proid);
    this.myformcabecera.controls['formestreg'].setValue(matcabecera.matcabestreg);
  }
}
