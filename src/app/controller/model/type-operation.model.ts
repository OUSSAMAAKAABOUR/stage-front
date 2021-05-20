import {Etape} from "./etape.model";

export class TypeOperation {
  public id: number;
  public libelle: string;
  public description: string;
  public fraixfixtotal: number;
  public fraixcomptabletotal: number;
  public etapes = new Array<Etape>();
}
