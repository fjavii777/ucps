export class GesCuotaModel {
    cunumero: string;
    cufec: string;
    pagid: string;
    cumon: string;
    cuestreg: string;
    constructor(obj?: any) {
      this.cunumero = obj && (obj.cunumero) || null;
      this.cufec = obj && (obj.cufec) || null;
      this.pagid = obj && (obj.pagid) || null;
      this.cumon = obj && obj.cumon || null;
      this.cuestreg = obj && obj.cuestreg || null;   
    }
  }