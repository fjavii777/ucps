export class GesMatriculaDetalleModel {
  matdetid: string;
  matcabid: string;
  matdetfkhor: string;
  matdetnomban: string;
  matdetcodpag: string;
  matdetmonpag: string;
  matdetfec: string;
  matdetobs: string;
  matdetestreg: string;
  horhorini: string;
  horhorfin: string;
  turcodmos: string;
    constructor(obj?: any) {
      this.matdetid = obj && (obj.matdetid) || null;
      this.matcabid = obj && (obj.matcabid) || null;
      this.matdetfkhor = obj && obj.matdetfkhor || null;
      this.matdetnomban = obj && obj.matdetnomban || null;
      this.matdetcodpag = obj && obj.matdetcodpag || null;
      this.matdetmonpag = obj && obj.matdetmonpag || null;
      this.matdetfec = obj && obj.matdetfec || null;
      this.matdetobs = obj && obj.matdetobs || null;
      this.horhorini = obj && obj.horhorini || null;
      this.horhorfin = obj && obj.horhorfin || null;
      this.turcodmos = obj && obj.turcodmos || null;
      this.matdetestreg = obj && obj. matdetestreg || null;
    }
}
export class GesMatriculaDetalleDTO {
  matdetid: string;
  matcabid: string;
  matdetfkhor: string;
  matdetnomban: string;
  matdetcodpag: string;
  matdetmonpag: string;
  matdetfec: string;
  matdetobs: string;
  matdetestreg: string;
  constructor(obj?: any) {
    this.matdetid = obj && (obj.matdetid) || null;
    this.matcabid = obj && (obj.matcabid) || null;
    this.matdetfkhor = obj && obj.matdetfkhor || null;
    this.matdetnomban = obj && obj.matdetnomban || null;
    this.matdetcodpag = obj && obj.matdetcodpag || null;
    this.matdetmonpag = obj && obj.matdetmonpag || null;
    this.matdetfec = obj && obj.matdetfec || null;
    this.matdetobs = obj && obj.matdetobs || null;
    this.matdetestreg = obj && obj. matdetestreg || null;
  }
}
export class DeleteDetalleModal {
  matdetid: string;
  matdetestreg: string;
}

