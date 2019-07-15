export class GesMatriculaCabeceraModel {
  matcabid: number;
  aldni: string;
  sedid: string;
  proid: string;
  alnom: string;
  seddes: string;
  pronom: string;
  matcabestreg: string;
  constructor(obj?: any) {
    this.matcabid = obj && (obj.matcabid) || 0;
    this.sedid = obj && (obj.sedid) || null;
    this.aldni = obj && obj.aldni || null;
    this.alnom = obj && obj.alnom || null;
    this.seddes = obj && obj.seddes || null;
    this.pronom = obj && obj.pronom || null;
    this.matcabestreg = obj && obj. matcabestreg || null;
  }
}
export class GesMatriculaCabeceraDTO {
  matcabid: number;
  sedid: string;
  aldni: string;
  proid: string;
  matcabestreg: string;
  constructor(obj?: any) {
    this.matcabid = obj && (obj.matcabid) || 0;
    this.sedid = obj && (obj.sedid) || null;
    this.aldni = obj && obj.aldni || null;
    this.proid = obj && obj.proid || null;
    this.matcabestreg = obj && obj. matcabestreg || null;
  }
}
export class DeleteMatriculaCabecera {
  matcabid: number;
  matcabestreg: string;
}
