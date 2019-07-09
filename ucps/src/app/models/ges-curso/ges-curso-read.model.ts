export class GesCursoReadModel {
    curid: string;
    curdes: string;   
constructor(obj?: any) {
    this.curid = obj && (obj.curid) || null;
    this.curdes = obj && (obj.curdes) || null;
    }
}