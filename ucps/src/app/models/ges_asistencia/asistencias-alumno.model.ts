export class AlumnoAsistDocenteModel {
    docdni: string;
    proid: string;
    curid: string;
    alumnos: AlumnosAsistencia[];
    
constructor(obj?: any) {
    this.docdni = obj && (obj.docdni) || null;
    this.proid = obj && (obj.proid) || null;
    this.curid = obj && (obj.curid) || null;
    this.alumnos = obj && (obj.alumnos) || [];
    }   
}
export class AlumnosAsistencia{
    aludni: string;
    aluasi: string;
    constructor(obj?: any) {
        this.aludni = obj && (obj.aludni) || null;
        this.aluasi = obj && (obj.aluasi) || true;
        } 
} 
