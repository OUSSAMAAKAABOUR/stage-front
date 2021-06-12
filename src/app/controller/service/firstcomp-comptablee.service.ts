import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {OperationSociete} from "../model/operation-societe.model";
import {ConnectionService} from "./connection.service";

@Injectable({
  providedIn: 'root'
})
export class FirstcompComptableeService {
  private _listoperation: Array<OperationSociete>;
  private _urlBase: String = 'http://localhost:8036/gestion-comptabilite/operationSociete';
  constructor(private http: HttpClient,private connectionservice: ConnectionService) { }

  get urlBase(): String {
    return this._urlBase;
  }

  set urlBase(value: String) {
    this._urlBase = value;
  }

  get listoperation(): Array<OperationSociete> {
    if (this._listoperation == null){
      this._listoperation = new Array<OperationSociete>();
    }
    return this._listoperation;
  }

  set listoperation(value: Array<OperationSociete>) {
    this._listoperation = value;
  }
  public findoperationforcomptable(){
    this.http.get<Array<OperationSociete>>(this.urlBase + '/trvoperationforcomptable/code/' + this.connectionservice.connection2.comptable.code).subscribe(
      data =>{
        this.listoperation = data;
        console.log('bravo trv list operation for comptable');
      }, error => {
        console.log('erreur trv list operation for comptable');
      }
    );
  }
}