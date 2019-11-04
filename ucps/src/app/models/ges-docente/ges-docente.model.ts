export class GesDocenteModel {
    docdni: string;
    doccorele: string;
    docnom: string;
    docapepat: string;
  docapemat: string;
    docfecnac: string;
    doctel: string;
    docdir: string;
    docnomusu: string;
    doccon: string;
    docestereg: string;

    constructor(obj?: any) {
      this.docdni = obj && (obj.docdni) || null;
      this.doccorele = obj && (obj.doccorele) || null;
      this.docnom = obj && (obj.docnom) || null;
      this.docapepat = obj && obj.docapepat || null;
      this.docapemat = obj && obj.docapemat || null;
      this.docfecnac = obj && obj.docfecnac || null;
      this.doctel = obj && obj.doctel || null;
      this.docdir = obj && obj.docdir || null;
      this.docnomusu = obj && obj.docnomusu || null;
      this.doccon = obj && obj.doccon || null;
      this.docestereg = obj && obj.docestereg || null;
    }
  }

