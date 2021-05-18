import {Comptable} from "./comptable.model";

export class Societe {
  public id: number;
  public ice: string;
  public adresse: string;
  public raisonSociale: string;
  public etatSociete: string;
  public anneeExploitation: number;
  public age: number;
  public comptable = new Comptable();
}
