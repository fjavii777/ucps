export class CursoDocenteModel {
    idCurso:number;
    curid: string;
    curnom:string;
    horario:Horario[];    
constructor(obj?: any) {
    this.idCurso = obj && (obj.idCurso) || 0;
    this.curid = obj && (obj.curid) || null;
    this.curnom = obj && (obj.curnom) || null;
    this.horario = obj && (obj.horario) || null;
    }
}
export class Horario{ 
    curhorfechini : string;
    curhorfechfin : string;
    curhordia:string;
    constructor(obj?: any) {
        this.curhorfechini = obj && (obj.curhorfechini) || null;
        this.curhorfechfin = obj && (obj.curhorfechfin) || null;
        this.curhordia = obj && (obj.curhordia) || null;
    }
}


