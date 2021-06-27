import {TypeOperation} from "./type-operation.model";
import {EtatOperationSociete} from "./etat-operation-societe.model";
import {Comptable} from "./comptable.model";
import {OperationSocieteJustif} from "./operation-societe-justif.model";
import {Paiement} from "./paiement.model";
import {Societe} from "./societe.model";

export class OperationSociete {
  public id: number;
  public ref: string;
  public libelle: string;
  public fraixFix: number;
  public fraixComptable: number;
  public etatOperation: string;
  public raison: string;
  public dateOperationSociete: string;
  public typeOperation = new TypeOperation();
  public etatOperationSociete = new EtatOperationSociete();
  public comptableTaiteur = new Comptable();
  public comptableValidateur = new Comptable();
  public operationSocieteJustifs = new Array<OperationSocieteJustif>();
  public paiements = new Array<Paiement>();
  public societe = new Societe();


}
