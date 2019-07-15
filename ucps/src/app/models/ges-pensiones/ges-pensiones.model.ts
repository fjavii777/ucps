export class GesPensionModel {
    pagid: string;
    matdetid: string;
    pagmes: string;
    pagnomban: string;
    pagcod: string;
    pagmon: string;
    pagestreg: string;
    constructor(obj?: any) {
      this.pagid = obj && (obj.pagid) || null;
      this.matdetid = obj && (obj.matdetid) || null;
      this.pagmes = obj && (obj.pagmes) || null;
      this.pagnomban = obj && obj.pagnomban || null;
      this.pagcod = obj && obj.pagcod || null;
      this.pagmon = obj && obj.pagmon || null;
      this.pagestreg = obj && obj.pagestreg || null;
    
    }
  }
  