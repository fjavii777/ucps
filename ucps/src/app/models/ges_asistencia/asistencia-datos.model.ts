export class AsistencaDatodModel {
    pronom: string;
    curnom: string;
    docnom: string;    
    docapepat: string;
    docapemat: string;  
constructor(obj?: any) {
    this.pronom = obj && (obj.pronom) || null;
    this.curnom = obj && (obj.curnom) || null;
    this.docnom = obj && (obj.docnom) || null;
    this.docapepat = obj && (obj.docapepat) || null;
    this.docapemat = obj && (obj.docapemat) || null;
    }
}