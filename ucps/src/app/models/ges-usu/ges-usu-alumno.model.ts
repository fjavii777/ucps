export class GesUsuAlumnoModel {
  AlDni: string;
  AlCorEle: string;
  AlCui: string;
  AlNom: string;
  AlApePat: string;
  AlApeMat: string;
  AlFecNac: string;
  AlTel: string;
  AlDir: string;
  AlNomUsu: string;
  AlCon: string;
  AlEstReg: string;

  constructor(obj?: any) {
    this.AlDni = obj && (obj.AlDni) || null;
    this.AlCorEle = obj && (obj.AlCorEle) || null;
    this.AlCui = obj && (obj.AlCui) || null;
    this.AlNom = obj && obj.AlNom || null;
    this.AlApePat = obj && obj.AlApePat || null;
    this.AlApeMat = obj && obj.AlApeMat || null;
    this.AlFecNac = obj && obj.AlFecNac || null;
    this.AlTel = obj && obj.AlTel || null;
    this.AlDir = obj && obj.AlDir || null;
    this.AlNomUsu = obj && obj.AlNomUsu || null;
    this.AlCon = obj && obj.AlCon || null;
    this.AlEstReg = obj && obj.AlEstReg || null;
  }
}
export class DeleteAlumnoModel {
  aldni: string;
  alestreg: string;
}
