
export class DocenteListCursosModel {
    docdni: string;
    docnom:string;
    docapepat:string;
    docapemat:string;
    pronom:string;
    curid:string;
    curnom:string;
    turnom:string;
    
constructor(obj?: any) {
    this.docdni = obj && (obj.docdni) || null;
    this.docnom = obj && (obj.docnom) || null;
    this.docapepat = obj && (obj.docapepat) || null;
    this.docapemat = obj && (obj.docapemat) || null;
    this.pronom = obj && (obj.pronom) || null;
    this.curid = obj && (obj.curid) || null;
    this.curnom = obj && (obj.curnom) || null;
    this.turnom = obj && (obj.turnom) || null;
    }
}
