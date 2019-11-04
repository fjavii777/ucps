import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ProgramaService} from '../../../../services/ges-programa/programa.service';
import {SedeService} from '../../../../services/ges-sede/sede.service';

@Component({
  selector: 'ngx-modal-add-programa',
  styleUrls: ['./modal-add-prog.component.scss'],
  templateUrl: './modal-add-prog.component.html',
})
export class ModalAddProgComponent {
  formError = false;
  titulo = 'Agregar Programa';
  boton = 'Guardar';
  flagIsModificar = false;
  loadingGuardar = false;
  cbSedes: any;
  public myformadministrativo: FormGroup;
  constructor(private fb: FormBuilder,
              private programaService: ProgramaService,
              private sedeService: SedeService,
              public activeModal: NgbActiveModal) {
    this.myformadministrativo = this.fb.group({
      proid: null,
      sedid: [null, Validators.required],
      pronom: [null, Validators.required],
      protipo: [null, Validators.required],
      procuota: [null, Validators.required],
      proestreg: ['A', Validators.required],
    });
    this.listcbSedes();
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
    if (this.myformadministrativo.valid) {
      this.loadingGuardar = true;
      console.log('to send', this.myformadministrativo.value);
      if (this.flagIsModificar) {
        this.programaService.putUpdatePrograma(this.myformadministrativo.value).subscribe(
          resp => {
            this.activeModal.close(true);
          },
          err => {
            console.log(err);
          });
      } else {
        this.programaService.postcreatePrograma(this.myformadministrativo.value).subscribe(
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
  iniciarFormulario(programa) {
    this.flagIsModificar = true;
    this.titulo = 'Modificar Programa';
    this.boton = 'Modificar';
    this.myformadministrativo.controls['proid'].setValue(programa.proid);
    this.myformadministrativo.controls['sedid'].setValue(programa.sedid);
    this.myformadministrativo.controls['pronom'].setValue(programa.pronom);
    this.myformadministrativo.controls['protipo'].setValue(programa.protipo);
    this.myformadministrativo.controls['procuota'].setValue(programa.procuota);
    this.myformadministrativo.controls['proestreg'].setValue(programa.proestreg);
  }
}
