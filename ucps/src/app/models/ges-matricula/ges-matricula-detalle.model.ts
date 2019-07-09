export class GesMatriculaDetalleModel {
        matdetid: string;
        matcabid: string;
        matdetfkcur: string;
        matdetfkhor: string;
        matdetnomban: string;
        matdetcodpag: string;
        matdetmonpag: string;
        matdetestreg: string;
   
    constructor(obj?: any) {
      this.matdetid = obj && (obj.matdetid) || null;
      this.matcabid = obj && (obj.matcabid) || null;
      this.matdetfkcur = obj && (obj.matdetfkcur) || null;
      this.matdetfkhor = obj && obj.matdetfkhor || null;
      this.matdetnomban = obj && obj.matdetnomban || null;
      this.matdetcodpag = obj && obj. matdetcodpag || null;
      this.matdetmonpag = obj && obj. matdetmonpag || null;
      this.matdetestreg = obj && obj. matdetestreg || null;
    }
  }