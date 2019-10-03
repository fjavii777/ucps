export class GesUsuAlumnoModel {
  aludni: string;
  alucorele: string;
  alucui: string;
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
    this.alucui = obj && (obj.alucui) || null;
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
export class DeleteAlumnoModel {
  aldni: string;
  alestreg: string;
}
