export class ProgramaModel {
  proid: number;
  pronom: string;
  constructor(obj?: any) {
    this.proid = obj && (obj.proid) || 0;
    this.pronom = obj && (obj.pronom) || null;
  }
}
