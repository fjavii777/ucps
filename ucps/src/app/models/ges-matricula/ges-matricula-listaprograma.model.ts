export class GesMatriculaListaProgramaModel {
    AlCod: string;
    CurDes: string;
    GenCodMos: string;
    MatDetMonPag :string;
    AlNom:string;
    AlPePat:string;
    AlPeMat:string;
    HorHorIni:string;
    HorHorFin:string;
    MatDetId:string;
   

constructor(obj?: any) {
    this.AlCod = obj && (obj.AlCod) || null;
    this.CurDes = obj && (obj.CurDes) || null;
    this.GenCodMos = obj && (obj.GenCodMos) || null;
    this.MatDetMonPag = obj && obj.MatDetMonPag || null;
    this. AlNom = obj && obj. AlNom || null;
    this.AlPePat = obj && obj.AlPePat || null;
    this.AlPeMat = obj && obj.AlPeMat || null;
    this.HorHorIni = obj && obj.HorHorIni || null;
    this.HorHorFin = obj && obj.HorHorFin || null;
    this.MatDetId = obj && obj.MatDetId || null;
    }
}