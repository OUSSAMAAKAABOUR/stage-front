import {OperationSociete} from "./operation-societe.model";

export class OperationSocieteJustif {
  public id: number;
  public ref: string;
  public libelle: string;
  public description: string;
  public chemin: string;
  public dateJustif: string;
  public operationSociete = new OperationSociete();
}
