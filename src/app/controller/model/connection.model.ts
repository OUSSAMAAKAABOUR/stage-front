import {Societe} from "./societe.model";

export class Connection {
  public id: number;
  public username: string;
  public password: string;
  public type: string;
  public societeLogin = new Societe();
}
