import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Connection} from "../model/connection.model";

@Injectable({
  providedIn: 'root'
})
export class ValidateCompteService {
  private _UrlBaseComptable = 'http://localhost:8036/gestion-comptabilite/connection';
  private _UrlBaseConnection = 'http://localhost:8036/gestion-comptabilite/connection';
  private _listcomptes: Array<Connection>;
  constructor(private http: HttpClient) { }

  get UrlBaseConnection(): string {
    return this._UrlBaseConnection;
  }

  set UrlBaseConnection(value: string) {
    this._UrlBaseConnection = value;
  }

  get listcomptes(): Array<Connection> {
    if (this._listcomptes == null){
      this._listcomptes = new Array<Connection>();
    }
    return this._listcomptes;
  }

  set listcomptes(value: Array<Connection>) {
    this._listcomptes = value;
  }

  get UrlBaseComptable(): string {
    return this._UrlBaseComptable;
  }

  set UrlBaseComptable(value: string) {
    this._UrlBaseComptable = value;
  }
 public findcompte(){
    this.http.get<Array<Connection>>(this.UrlBaseConnection + '/compteencour/etat/en cour').subscribe(
      data =>{
        this.listcomptes = data;
        console.log('bravo trouver compte en cour');
      }, error => {
        console.log('erreur trouver compte en cour');
      }
    );
 }
  public acceptcompte(connection: Connection, index: number){
    this.http.put<number>(this.UrlBaseComptable + '/validatecompte', connection).subscribe(
       data =>{
           this.listcomptes.splice(index, 1);
           console.log('bravo accepter compte');
       }, error => {
        console.log('erreur accepter compte');
      }
    );
  }
  public refusercompte(connection: Connection, index: number){
    this.http.put<number>(this.UrlBaseComptable + '/refusecompte', connection).subscribe(
      data =>{
        this.listcomptes.splice(index, 1);
        console.log('bravo refuser compte');
      }, error => {
        console.log('erreur refuser compte');
      }
    );
  }
}
