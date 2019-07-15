export class GesSedeModel {
    sedid: string;
    seddes: string;
    constructor(obj?: any) {
      this.sedid = obj && (obj.sedid) || null;
      this.seddes = obj && (obj.seddes) || null;
    }
  }
