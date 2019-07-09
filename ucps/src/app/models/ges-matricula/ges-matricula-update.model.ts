export class GesMatriculaListaUpdateModel {
    
    matdetid:string;
    matdetfkcur:string;
    matdetfkhor:string;

    constructor(obj?: any) {
        this.matdetid = obj && (obj.matdetid) || null;
        this.matdetfkcur = obj && (obj.matdetfkcur) || null;
        this.matdetfkhor = obj && (obj.matdetfkhor) || null;
        }
}



