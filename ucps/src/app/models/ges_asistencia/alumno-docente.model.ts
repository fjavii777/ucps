export class AlumnoDocenteModel {
    aludni: string;
    alunom: string;
    aluapepat: string;
    aluapemat: string;
    alucui: string;
    aluasi: string;
    
constructor(obj?: any) {
    this.aludni = obj && (obj.aludni) || null;
    this.alunom = obj && (obj.alunom) || null;
    this.aluapepat = obj && (obj.aluapepat) || null;
    this.aluapemat = obj && (obj.aluapemat) || null;
    this.alucui = obj && (obj.alucui) || null;
    this.aluasi = obj && (obj.aluasi) || null;
    }
}

