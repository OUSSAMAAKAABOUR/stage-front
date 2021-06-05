import {Injectable} from '@angular/core';
import {Connection} from '../model/connection.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  private _connection: Connection;
  private _urlBase: String = 'http://localhost:8036/gestion-comptabilite/facture';
  private _lien : String;


  constructor(private http: HttpClient) {
  }

  get connection(): Connection {
    if (this._connection == null) {
      this._connection = new Connection();
    }
    return this._connection;
  }

  set connection(value: Connection) {
    this._connection = value;
  }


  get lien(): String {
    return this._lien;
  }

  set lien(value: String) {
    this._lien = value;
  }

  get urlBase(): String {
    return this._urlBase;
  }

  set urlBase(value: String) {
    this._urlBase = value;
  }

  public verify() {

  }
}
