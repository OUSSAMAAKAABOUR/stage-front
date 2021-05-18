import {Etape} from "./etape.model";

export class TypeOperation {
  public id: number;
  public libelle: string;
  public description: string;
  public FraixFixTotal: number;
  public FraixComptableTotal: number;
  public etapes = new Array<Etape>();
}
