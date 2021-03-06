import {Injectable} from '@angular/core';
import {Connection} from '../model/connection.model';
import {HttpClient} from '@angular/common/http';
import {Test} from '../model/test.model';
import {Facture} from '../model/facture.model';
import {Router} from '@angular/router';
import {OperationsocieteService} from './operationsociete.service';
import {OperationSociete} from '../model/operation-societe.model';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  private _connection: Connection;
  private _connection2: Connection;
  private _connection3: Connection;
  private _teste: Test;
  private _urlBase: String = 'http://localhost:8036/gestion-comptabilite/connection';
  private _lien: String;
  private _etat: boolean ;
  private _etat2: number ;
  private _operationsse: Array<OperationSociete>;
  private _urlBaseO: String = 'http://localhost:8036/gestion-comptabilite/operationSociete/';
  private _listoperation: Array<OperationSociete>;
  private _listoperationvalidateur: Array<OperationSociete>;
  private _urlBaseOperation: String = 'http://localhost:8036/gestion-comptabilite/operationSociete';


  constructor(private http: HttpClient, private router: Router) {
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


  get etat2(): number {
    return this._etat2;
  }

  set etat2(value: number) {
    this._etat2 = value;
  }

  get urlBaseO(): String {
    return this._urlBaseO;
  }

  set urlBaseO(value: String) {
    this._urlBaseO = value;
  }

  get operationsse(): Array<OperationSociete> {
    if (this._operationsse == null) {
      this._operationsse = new Array<OperationSociete>();
    }
    return this._operationsse;
  }

  set operationsse(value: Array<OperationSociete>) {
    this._operationsse = value;
  }

  get connection2(): Connection {

    if (this._connection2 == null) {
      this._connection2 = new Connection();
    }
    return this._connection2;
  }

  set connection2(value: Connection) {
    this._connection2 = value;
  }

  get connection3(): Connection {

    if (this._connection3 == null) {
      this._connection3 = new Connection();
    }
    return this._connection3;
  }

  set connection3(value: Connection) {
    this._connection3 = value;
  }

  get teste(): Test {
    if (this._teste == null) {
      this._teste = new Test();
    }
    return this._teste;
  }

  set teste(value: Test) {
    this._teste = value;
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


  get etat(): boolean {
    return this._etat;
  }

  set etat(value: boolean) {
    this._etat = value;
  }

  public save() {

    this.http.post<number>(this.urlBase + '/', this.connection).subscribe(
      data => {
        if (data > 0) {
          console.log('bravo');
          alert('vous avez bien cr??er votre compt, vous devez attendre la validation de l\'admin');
          console.log(this.connection);

          this.connection = null;
          this.teste = null;
        }

      }, error => {
        console.log('erreur');
      }
    );


  }

  public loger() {
    this.http.get<number>(this.urlBase + '/username/' + this.teste.t3 + '/password/' + this.teste.t4).subscribe(
      data => {
        this._etat2 = data;
        if (this.teste.t3 != null && this.teste.t4 != null) {
          if (data == -1) {
            this.router.navigateByUrl('');
            alert('ce compte n\'existe pas vous devez verifier le username ou password');
          } else if (data == 1) {
            this.router.navigateByUrl('firstSociete');
            this.getLogin();
            this.select();
          } else if (data == 2) {
            this.getLogin();
            this.router.navigateByUrl('secondcomp');
          } else if (data == 3) {
            this.router.navigateByUrl('firstcompcomptable');
            this.getLogin3();
          } else if (data == 0) {
            this.router.navigateByUrl('');
            alert('ce compt n\'est pas encore traiter');
          } else if (data == -2) {
            this.router.navigateByUrl('');
            alert('ce compt est refus?? par l\'admin');
          }
          console.log('bravoo');
          console.log(data);
        }
      }, error => {
        console.log('erreur');
      }
    );

  }

  public getLogin() {
    this.http.get<Connection>(this.urlBase + '/usernam/' + this.teste.t3 + '/password/' + this.teste.t4).subscribe(
      data => {
        if (data) {
          this.connection3 = data;
          if (data.societeLogin != null){
          this.findbyIce();}
         /* this.connection2 = this.cloneCommande(this.connection3); */
        }

        console.log('bravoo login');
      }, error => {
        console.log('ereur');
      }
    );


  }

  public findbyIce() {
    if (this.connection3.societeLogin != null){
    this.http.get<Array<OperationSociete>>(this.urlBaseO + 'ice/' + this.connection3.societeLogin.ice).subscribe(
      data => {
        this.operationsse = data;
        console.log(data);
        console.log('bravo trouver les operations');
      }, error => {
        console.log('erreur trouver les operation');
      }
    );
  }}

  private cloneCommande(conni: Connection) {
    const myClone = new Connection();
    myClone.id = conni.id;
    myClone.username = conni.username;
    myClone.password = conni.password;
    myClone.type = conni.type;
    myClone.etat = conni.etat;
    myClone.societeLogin = conni.societeLogin;
    return myClone;
  }

  public select() {
    this.http.get<number>(this.urlBase + '/usernome/' + this.teste.t3 + '/password/' + this.teste.t4).subscribe(
      data => {
        if (data == -1) {
          this.etat = true;
        } else {
          this.etat = false;
        }
        console.log('bravoo SELECT');
        console.log(this.etat);
      }, error => {
        console.log('erreur');
      }
    );


  }

  public findoperationforcomptable() {
    this.http.get<Array<OperationSociete>>(this.urlBaseOperation + '/trvoperationforcomptable/code/' + this.connection3.comptable.code).subscribe(
      data => {
        this.listoperation = data;
        console.log('bravo trv list operation for comptable');
      }, error => {
        console.log('erreur trv list operation for comptable');
      }
    );
  }

  public findoperationforcomptablevalidateur(){
    this.http.get<Array<OperationSociete>>(this.urlBaseOperation + '/trvoperationforcomptablevalidateur/code/' + this.connection3.comptable.code).subscribe(
      data =>{
        this.listoperationvalidateur = data;
        console.log('bravo trv list operation for comptablevalidateur');
        console.log(this.listoperationvalidateur);
      }, error => {
        console.log('erreur trv list operation for comptablevalidateur');
      }
    );
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

  get listoperationvalidateur(): Array<OperationSociete> {
    if(this._listoperationvalidateur == null){
      this._listoperationvalidateur = new Array<OperationSociete>();
    }
    return this._listoperationvalidateur;
  }

  set listoperationvalidateur(value: Array<OperationSociete>) {
    this._listoperationvalidateur = value;
  }

  get urlBaseOperation(): String {
    return this._urlBaseOperation;
  }

  set urlBaseOperation(value: String) {
    this._urlBaseOperation = value;
  }
  public getLogin3() {
    this.http.get<Connection>(this.urlBase + '/usernam/' + this.teste.t3 + '/password/' + this.teste.t4).subscribe(
      data => {
        if (data) {
          this.connection3 = data;
          this.connection2 = this.cloneCommande(this.connection3);
          this.findoperationforcomptable();
          this.findoperationforcomptablevalidateur();
        }

        console.log('bravoo login');
      }, error => {
        console.log('ereur');
      }
    );


  }

  public getLogin2() {
    this.http.get<Connection>(this.urlBase + '/usernam/' + this.teste.t3 + '/password/' + this.teste.t4).subscribe(
      data => {
        if (data) {
          this.connection3 = data;
        }

        console.log('bravoo login2');
      }, error => {
        console.log('ereur');
      }
    );


  }
  public getout(){
    this.teste.t3 = null;
    this.teste.t4 = null;
  }


}
