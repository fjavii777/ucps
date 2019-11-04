export class GesPensionlListModel {
    matid: string;
    aludni: string;
    alunom: string;
    seddes: string;
    pronom: string;
    aluapepat:string;
    aluapemat:string;
    matfec:string;
    constructor(obj?: any) {
      this.matid = obj && (obj.matid) || null;
      this.aludni = obj && (obj.aludni) || null;
      this.alunom = obj && (obj.alunom) || null;
      this.seddes = obj && obj.seddes || null;
      this.pronom = obj && obj.pronom || null;  
      this.aluapepat = obj && obj.aluapepat || null;
      this.aluapemat = obj && obj.aluapemat || null;
      this.matfec = obj && obj.matfec || null;  
    }
  }
  