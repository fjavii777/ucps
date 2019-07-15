export class GesPensionlListModel {
    matdetid: string;
    aldni: string;
    alnom: string;
    seddes: string;
    pronom: string;
    alapepat:string;
    alpemat:string;
    matdetfec:string;
    constructor(obj?: any) {
      this.matdetid = obj && (obj.matdetid) || null;
      this.aldni = obj && (obj.aldni) || null;
      this.alnom = obj && (obj.alnom) || null;
      this.seddes = obj && obj.seddes || null;
      this.pronom = obj && obj.pronom || null;  
      this.alapepat = obj && obj.alapepat || null;
      this.alpemat = obj && obj.alpemat || null;
      this.matdetfec = obj && obj.matdetfec || null;  
    }
  }
  