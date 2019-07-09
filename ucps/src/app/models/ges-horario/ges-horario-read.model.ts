export class GesHorarioReadProgramaModel {
    horid: string;
    gencodmos: string;   
    horhorini: string;
    horhorfin: string;
    horestreg: string;
constructor(obj?: any) {
    this.horid = obj && (obj.horid) || null;
    this.gencodmos = obj && (obj.gencodmos) || null;
    this.horhorini = obj && (obj.horhorini) || null;
    this.horhorfin = obj && (obj.horhorfin) || null;
    this.horestreg = obj && (obj.horestreg) || null;
    }
}