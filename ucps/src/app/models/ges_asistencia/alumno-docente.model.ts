export class AlumnoDocenteModel {
    aludni: string;
    alunom: string;
    aluapepat: string;
    aluapemat: string;
    asisfec:string
    alucui: string;
    aluasi: number;
    altipoasis:boolean;
    asisasistencia:string;
    alufil:number;
constructor(obj?: any) {
    this.aludni = obj && (obj.aludni) || null;
    this.alunom = obj && (obj.alunom) || null;
    this.aluapepat = obj && (obj.aluapepat) || null;
    this.aluasi = obj && (obj.aluasi) || 1;
    this.aluapemat = obj && (obj.aluapemat) || null;
    this.asisfec = obj && (obj.asisfec) || null;
    this.alucui = obj && (obj.alucui) || null;
    this.asisasistencia = obj && (obj.asisasistencia) || null;
    this.altipoasis = obj && (obj.altipoasis) || (obj.asisasistencia=="1")?true:false;
    this.alufil = obj && (obj.alufil) || 0;
    }
}

