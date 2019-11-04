import { AlumnosAsistencia } from './asistencias-alumno.model';

export class AsistenciaModificarModel {
    docdni: string;
    curid: string;
    fecha: string;
    estdocasis: string;
    alumnos: AlumnosAsistencia[];
constructor(obj?: any) {
    this.docdni = obj && (obj.docdni) || null;
    this.curid = obj && (obj.curid) || null;
    this.fecha = obj && (obj.fecha) || null;
    this.estdocasis = obj && (obj.estdocasis) || null;
    this.alumnos = obj && (obj.alumnos) || null;
    }
}
