import {OperationSociete} from "./operation-societe.model";

export class Paiement {
  public id: number;
  public ref: string;
  public description: string;
  public montant: number;
  public datePaiement: string;
  public operationSociete = new OperationSociete();
}
