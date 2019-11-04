export class GesUsuAlumnoModel {
  aludni: string;
  alucorele: string;
  // alucui: string;
  alunom: string;
  aluapemat: string;
  aluapepat: string;
  alufecnac: string;
  alutel: string;
  aludir: string;
  alunomusu: string;
  alucon: string;
  aluestreg: string;

  constructor(obj?: any) {
    this.aludni = obj && (obj.aludni) || null;
    this.alucorele = obj && (obj.alucorele) || null;
    // this.alucui = obj && (obj.alucui) || null;
    this.alunom = obj && obj.alunom || null;
    this.aluapemat = obj && obj.aluapemat || null;
    this.aluapepat = obj && obj.aluapepat || null;
    this.alufecnac = obj && obj.alufecnac || null;
    this.alutel = obj && obj.alutel || null;
    this.aludir = obj && obj.aludir || null;
    this.alunomusu = obj && obj.alunomusu || null;
    this.alucon = obj && obj.alucon || null;
    this.aluestreg = obj && obj.aluestreg || null;
  }
}
export class GesUsuAlumnoModelSaveUpdate {
  AlDni: string;
  AlCorEle: string;
  AlNom: string;
  AlApeMat: string;
  AlApePat: string;
  AlFecNac: string;
  AlTel: string;
  AlDir: string;
  AlNomUsu: string;
  AlCon: string;
  AlEstReg: string;
  constructor(obj?: any) {
    this.AlDni = obj && (obj.AlDni) || null;
    this.AlCorEle = obj && (obj.AlCorEle) || null;
    this.AlNom = obj && obj.AlNom || null;
    this.AlApeMat = obj && obj.AlApeMat || null;
    this.AlApePat = obj && obj.AlApePat || null;
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
