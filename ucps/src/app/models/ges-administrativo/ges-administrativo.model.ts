export class GesAdministrativoModel {
  admdni: string;
  admcorele: string;
  admnom: string;
  admapepat: string;
  admapemat: string;
  admfecnac: string;
  admtel: string;
  admdir: string;
  admnomusu: string;
  admcon: string;
  admestreg: string;

  constructor(obj?: any) {
    this.admdni = obj && (obj.admdni) || null;
    this.admcorele = obj && (obj.admcorele) || null;
    this.admnom = obj && (obj.admnom) || null;
    this.admapepat = obj && obj.admapepat || null;
    this.admapemat = obj && obj.admapemat || null;
    this.admfecnac = obj && obj.admfecnac || null;
    this.admtel = obj && obj.admtel || null;
    this.admdir = obj && obj.admdir || null;
    this.admnomusu = obj && obj.admnomusu || null;
    this.admcon = obj && obj.admcon || null;
    this.admestreg = obj && obj.admestreg || null;
  }
}