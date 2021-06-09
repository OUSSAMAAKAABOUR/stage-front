import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {FacturechoicecompComponent} from "../../view/facturechoicecomp/facturechoicecomp.component";
import {HttpClient} from "@angular/common/http";
import {OperationSociete} from "../model/operation-societe.model";
import {ConnectionService} from "./connection.service";
import {Comptable} from "../model/comptable.model";
import {Connection} from "../model/connection.model";

@Injectable({
  providedIn: 'root'
})
export class TestserviceService {
  private _x = true;
  private _y = false;
  private _w = false;
  private _k = false;
  private _l = false;
  private _details = false;
  private _comptecreer: Connection;
  private _UrlBaseOperationSociete = 'http://localhost:8036/gestion-comptabilite/operationSociete';
  private _UrlBaseComptable = 'http://localhost:8036/gestion-comptabilite/comptable';
  private _UrlBaseConnection = 'http://localhost:8036/gestion-comptabilite/connection';
  private _listeOperation : Array<OperationSociete>;
  private _comptable: Comptable;
  constructor(private router: Router,private http: HttpClient,private connectionService: ConnectionService) { }

  get UrlBaseConnection(): string {
    return this._UrlBaseConnection;
  }

  set UrlBaseConnection(value: string) {
    this._UrlBaseConnection = value;
  }

  get comptecreer(): Connection {
    if (this._comptecreer == null){
      this._comptecreer = new Connection();
    }
    return this._comptecreer;
  }

  set comptecreer(value: Connection) {
    this._comptecreer = value;
  }

  get details(): boolean {
    return this._details;
  }

  set details(value: boolean) {
    this._details = value;
  }

  get comptable(): Comptable {
    if (this._comptable == null){
      this._comptable = new Comptable();
    }
    return this._comptable;
  }

  set comptable(value: Comptable) {
    this._comptable = value;
  }

  get UrlBaseComptable(): string {
    return this._UrlBaseComptable;
  }

  set UrlBaseComptable(value: string) {
    this._UrlBaseComptable = value;
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

  get UrlBaseOperationSociete(): string {
    return this._UrlBaseOperationSociete;
  }

  set UrlBaseOperationSociete(value: string) {
    this._UrlBaseOperationSociete = value;
  }

  get k(): boolean {
    return this._k;
  }

  set k(value: boolean) {
    this._k = value;
  }

  get l(): boolean {
    return this._l;
  }

  set l(value: boolean) {
    this._l = value;
  }

  get x(): boolean {
    return this._x;
  }

  set x(value: boolean) {
    this._x = value;
  }

  get y(): boolean {
    return this._y;
  }

  set y(value: boolean) {
    this._y = value;
  }

  get w(): boolean {
    return this._w;
  }

  set w(value: boolean) {
    this._w = value;
  }
  public methode1login(){
    this.router.navigate(['/secondcomp']);
    this.x = false;
    this.y = true;
  }
  public methode2second1facturechoice(){
    this.y = false; this.x = false; this.l = false; this.k = true;
    this.w = true;
  }
  public methode2second1operationchoice(){
    this.y = false; this.x = false; this.w = false; this.l = false;
    this.k = true;
  }
  public methode2second1declarationchoice(){
    this.y = false; this.x = false; this.w = false; this.k = false;
    this.l = true;
  }

  public findoperation(){
    this.http.get<Array<OperationSociete>>(this.UrlBaseOperationSociete+"/etatoperationsociete/ref/Encour").subscribe(
      data =>{
          this.listeOperation = data;
          console.log('Bravo find list of operation');
      }, error => {
        console.log('Erreur find list of operation');
      }
    );
  }
  public savecomptable(){
    this.http.post<number>(this.UrlBaseComptable + "/",this.comptable).subscribe(
      data =>{
        if (data > 0 ){
          alert('Comptable créer avec succées');
          this.findcomptecreer();
          this.comptable = null;
          this.details = true;
          console.log('bravo save comptable');
        }
        else console.log('data = '+ data + 'un des conditions dans le backend n est pas respecter');
      }, error => {
        console.log('erreur save comptable');
      }
    );
  }
  public findcomptecreer(){
    this.http.get<Connection>(this.UrlBaseConnection + '/trvcomptecomptable/code/' + this.comptable.code).subscribe(
      data =>{
        this.comptecreer = data;
        console.log('bravo trouver compte creer');
      }, error => {
        console.log('erreur trouver compte creer');
      }
    );
  }
}
