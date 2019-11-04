import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatriculaService} from '../../../../services/ges-matricula/matricula.service';
import {SeguridadService} from '../../../../services/authentication/seguridad.service';
import {ProgramaService} from '../../../../services/ges-programa/programa.service';
import {SedeService} from '../../../../services/ges-sede/sede.service';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs';
import {AlumnoService} from '../../../../services/ges-usu/alumno.service';

@Component({
    selector: 'ngx-modal-update-matricula',
    styleUrls: ['./modal-update-matricula.component.scss'],
    templateUrl: './modal-update-matricula.component.html',
})
export class ModalUpdateMatriculaComponent implements OnInit {
  formError = false;
  titulo = 'Agregar Matricula';
  boton = 'Guardar';
  flagIsModificar = false;
  loadingGuardar = false;
  cbProgramas: any;
  cbTurnos: any;
  cbSedes: any;
  cbBancos: any;
  dniAlumno: any;
  public myformmatricula: FormGroup;
  constructor(private fb: FormBuilder,
              public activeModal: NgbActiveModal,
              private seguridadService: SeguridadService,
              private sedeService: SedeService,
              private alumnoService: AlumnoService,
              private programaService: ProgramaService,
              private matriculaService: MatriculaService) {
    this.myformmatricula = this.fb.group({
      matid: null,
      aludni: [null, Validators.required],
      sedid: [null, Validators.required],
      proid: [null, Validators.required],
      turid: [null, Validators.required],
      admdni: [this.seguridadService.getTokenAsObj().jti, Validators.compose(
        [Validators.pattern('^(0|[1-9][0-9]*)$'),
          Validators.required])],
      matnomban: [null, Validators.required],
      matcodpag: [null, Validators.required],
      matmonpag: [null, Validators.compose([Validators.min(1), Validators.required])],
      matfec: [null, Validators.required],
      matobs: [''],
      matestreg: ['A', Validators.required],
    });
  }
  ngOnInit(): void {
    this.listcbBancos();
    this.listcbSedes();
    this.listcbProgramas();
    this.listcbTurnos();
  }
  searchAlumnoXdni = (text$: Observable<string>) => {
    console.log('entro al filtro searchalumnoxDNI');
    return text$.filter((t: string) => t.length > 1)
      .debounceTime(200)
      .switchMap((text: string) => {
        const dni = text;
        return this.alumnoService.postBuscarAlumnoxParteId(dni);
      });
  }
  formatearEntradaAlumnoXdni = (result: any) =>
    result.aludni + ' - ' +
    result.alunom + ' ' +
    result.aluapepat + ' ' +
    result.aluapemat
  listcbProgramas() {
    this.programaService.getListarProgramas().subscribe(
      resp => {
        this.cbProgramas = resp;
      },
      err => {
        console.log(err);
      });
  }
  listcbTurnos() {
    this.matriculaService.getListarTurno().subscribe(
      resp => {
        this.cbTurnos = resp;
      },
      err => {
        console.log(err);
      });
  }
  listcbBancos() {
    this.cbBancos = [
      {
        descBan: 'BCP',
      },
      {
        descBan: 'Banco de la Nacion',
      },
    ];
  }
  listcbSedes() {
    this.sedeService.getListarSede().subscribe(
      resp => {
        this.cbSedes = resp;
      },
      err => {
        console.log(err);
      });
  }
  btn_clickAceptar() {
    this.formError = false;
    console.log(this.myformmatricula.get('aludni').value);
    console.log(this.myformmatricula.value);
    if (this.myformmatricula.valid) {
      this.loadingGuardar = true;
      if (this.flagIsModificar) { // Modificar
        this.matriculaService.putUpdateMatricula(this.dniAlumno, this.myformmatricula.value).subscribe(
          resp => {
            this.activeModal.close(true);
          },
          err => {
            console.log(err);
          });
      } else { // Crear
        this.matriculaService.postSaveMatricula(this.myformmatricula.value).subscribe(
          resp => {
            this.activeModal.close(true);
          },
          err => {
            console.log(err);
          });
      }
    } else {
      this.formError = true;
    }
  }
  iniciarFormulario(data: any) {
    this.flagIsModificar = true;
    this.titulo = 'Modificar Matricula';
    this.boton = 'Modificar';
    this.dniAlumno = data.aludni;
    this.myformmatricula.controls['matid'].setValue(data.matid);
    this.myformmatricula.controls['aludni'].setValue(data.aludni);
    this.myformmatricula.controls['sedid'].setValue(data.sedid);
    this.myformmatricula.controls['proid'].setValue(data.proid);
    this.myformmatricula.controls['turid'].setValue(data.turid);
    this.myformmatricula.controls['matnomban'].setValue(data.matnomban);
    this.myformmatricula.controls['matcodpag'].setValue(data.matcodpag);
    this.myformmatricula.controls['matmonpag'].setValue(data.matmonpag);
    this.myformmatricula.controls['matfec'].setValue(data.matfec);
    this.myformmatricula.controls['matobs'].setValue(data.matobs);
    this.myformmatricula.controls['matestreg'].setValue(data.matestreg);
  }
}

