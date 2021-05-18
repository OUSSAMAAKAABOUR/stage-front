import {TypeOperation} from "./type-operation.model";

export class Etape {
  public id: number;
  public libelle: string;
  public description: string;
  public MontantFix: number;
  public MontantComptable: number;
  public typeOperation = new TypeOperation();
}
