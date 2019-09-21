export class CursoDocenteModel {
    curid: string;
    curnom:string;
    
constructor(obj?: any) {
    this.curid = obj && (obj.curid) || null;
    this.curnom = obj && (obj.curnom) || null;
    }
}

