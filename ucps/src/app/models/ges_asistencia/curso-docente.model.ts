export class CursoDocenteModel {
    curid: string;
    curnom:string;
    turnon:string;
    turfechhorini: string;
    turfechhorfin:string;
    turfechdia:string;
constructor(obj?: any) {
    this.curid = obj && (obj.curid) || null;
    this.curnom = obj && (obj.curnom) || null;
    this.turnon = obj && (obj.turnon) || null;
    this.turfechhorini = obj && (obj.turfechhorini) || null;
    this.turfechhorfin = obj && (obj.turfechhorfin) || null;
    this.turfechdia = obj && (obj.turfechdia) || null;
    }
}

