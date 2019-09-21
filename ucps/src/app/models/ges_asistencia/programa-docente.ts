
export class ProgramaDocenteModel {
    proid: string;
    pronom:string;
    
constructor(obj?: any) {
    this.proid = obj && (obj.proid) || null;
    this.pronom = obj && (obj.pronom) || null;
    }
}

