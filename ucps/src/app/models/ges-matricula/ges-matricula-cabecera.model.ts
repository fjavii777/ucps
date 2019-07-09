export class GesMatriculaCabeceraModel {
    matcabid: string;
    matcabfec: string;
    sedid: string;
    aldni: string;
    matcabobs: string;
    matcabestreg: string;
   
    constructor(obj?: any) {
      this.matcabid = obj && (obj.matcabid) || null;
      this.matcabfec = obj && (obj.matcabfec) || null;
      this.sedid = obj && (obj.sedid) || null;
      this.aldni = obj && obj.aldni || null;
      this.matcabobs = obj && obj.matcabobs || null;
      this.matcabestreg = obj && obj. matcabestreg || null;
    }
  }
  