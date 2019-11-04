export class AsistencaAlumnoModificarModel {
    docdni: string;
    proid: string;
    curid: string;    
    fecha: string;
    result:string;  
constructor(obj?: any) {
    this.docdni = obj && (obj.docdni) || null;
    this.proid = obj && (obj.proid) || null;
    this.curid = obj && (obj.curid) || null;
    this.fecha = obj && (obj.fecha) || null;
    this.result = obj && (obj.result) || null;
    }
}