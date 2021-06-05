import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {OperationSociete} from "../model/operation-societe.model";
import {Comptable} from "../model/comptable.model";

@Injectable({
  providedIn: 'root'
})
export class AffecterComptableService {
  private _listeOperation: Array<OperationSociete>;
  private _listeComptable: Array<Comptable>;
  private _operationSociete: OperationSociete;
  private _UrlBaseOperation = "http://localhost:8036/gestion-comptabilite/operationSociete/";
  private _UrlBaseComptable = "http://localhost:8036/gestion-comptabilite/comptable";
  private _a : boolean;
  constructor(private http: HttpClient) { }

  get a(): boolean {
    return this._a;
  }

  set a(value: boolean) {
    this._a = value;
  }

  get operationSociete(): OperationSociete {
    if (this._operationSociete == null){
      this._operationSociete = new OperationSociete();
    }
    return this._operationSociete;
  }

  set operationSociete(value: OperationSociete) {
    this._operationSociete = value;
  }

  get listeComptable(): Array<Comptable> {
    if (this._listeComptable == null){
      this._listeComptable = new Array<Comptable>();
    }
    return this._listeComptable;
  }

  set listeComptable(value: Array<Comptable>) {
    this._listeComptable = value;
  }

  get UrlBaseComptable(): string {
    return this._UrlBaseComptable;
  }

  set UrlBaseComptable(value: string) {
    this._UrlBaseComptable = value;
  }

  get UrlBaseOperation(): string {
    return this._UrlBaseOperation;
  }

  set UrlBaseOperation(value: string) {
    this._UrlBaseOperation = value;
  }

  get listeOperation(): Array<OperationSociete> {
    if (this._listeOperation == null){
      this._listeOperation = new Array<OperationSociete>();
    }
    return this._listeOperation;
  }

  set listeOperation(value: Array<OperationSociete>) {
    this._listeOperation = value;
  }
  public findOperationWhereComptablenull(){
    this.http.get<Array<OperationSociete>>(this.UrlBaseOperation + 'findoperationwherecomptablenull').subscribe(
      data =>{
        this.listeOperation = data;
        console.log('bravo findOperation where comptable is null');
      }, error => {
        console.log('erreur findOperation where comptable is null');
      }
    );
  }
  public findAllComptable(){
    this.http.get<Array<Comptable>>(this.UrlBaseComptable + '/').subscribe(
      data =>{
         this.listeComptable = data;
         console.log('bravo findAll Comptable');
      }, error => {
        console.log('erreur findAll Comptable');
      }
    );
  }
  public affecterComptableTraiteur(comptable: Comptable){
    this.operationSociete.comptableTaiteur = comptable;
    this.http.put<number>(this.UrlBaseOperation + '/comptabletraiteur',this.operationSociete).subscribe(
      data =>{
        console.log('bravo affecter comptable Traiteur');
      }, error => {
        console.log('erreur affecter comptable Traiteur');
      }
    );
  }

  public affecterComptableValidateur(comptable: Comptable){
    this.operationSociete.comptableValidateur = comptable;
    this.http.put<number>(this.UrlBaseOperation + '/comptablevalidateur',this.operationSociete).subscribe(
      data => {
        console.log('bravo affecter comptable Validateur');
      }, error => {
        console.log('erreur affecter comptable Validateur');
      }
    );
  }
}
