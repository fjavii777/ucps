export class GesPensionModel {
   pagid:string;
   matid: string; 
   pagfec: string;
   pagnomban: string;
   pagcod : string;
   pagmontot: string;
   pagtipo : string;
   pagestreg: string;
    constructor(obj?: any) {
      this.pagid = obj && (obj.pagid) || null;
      this.matid = obj && (obj.matid) || null;
      this.pagfec = obj && (obj.pagfec) || null;
      this.pagnomban = obj && (obj.pagnomban) || null;
      this.pagcod = obj && obj.pagcod || null;
      this.pagmontot = obj && obj.pagmontot || null;
      this.pagtipo = obj && obj.pagtipo || null;
      this.pagestreg = obj && obj.pagestreg || null;
    }
  }
  