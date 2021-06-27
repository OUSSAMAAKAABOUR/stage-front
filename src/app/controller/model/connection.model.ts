import {Societe} from './societe.model';
import {Comptable} from "./comptable.model";

export class Connection {
  public id: number;
  public username: string;
  public password: string;
  public type: string;
  public etat: string;
  public email: string;
  public societeLogin = new Societe;
  public comptable = new Comptable();
  /*public ices: string; just un test */
}

