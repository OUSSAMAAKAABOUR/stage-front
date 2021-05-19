import {TypeOperation} from "./type-operation.model";

export class Etape {
  public id: number;
  public libelle: string;
  public description: string;
  public montantfix: number;
  public montantcomptable: number;
  public delai: string;
  public typeOperation = new TypeOperation();
}
