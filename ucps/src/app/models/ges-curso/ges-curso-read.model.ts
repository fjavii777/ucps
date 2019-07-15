export class GesCursoReadModel {
    curid: string;
    curcod:string;
    curdes: string;
    curestreg:string;
constructor(obj?: any) {
    this.curid = obj && (obj.curid) || null;
    this.curcod = obj && (obj.curcod) || null;
    this.curdes = obj && (obj.curdes) || null;
    this.curestreg = obj && (obj.curestreg) || null;
    }
}
