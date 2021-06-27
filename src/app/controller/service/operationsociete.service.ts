import {Injectable} from '@angular/core';
import {OperationSociete} from '../model/operation-societe.model';
import {Facture} from '../model/facture.model';
import {HttpClient} from '@angular/common/http';
import {Etape} from '../model/etape.model';
import {TypeOperation} from '../model/type-operation.model';
import {CardService} from './card.service';
import {Connection} from '../model/connection.model';
import {Societe} from '../model/societe.model';
import {ConnectionService} from './connection.service';
import {Test} from '../model/test.model';
import {FirstcompComptableeService} from './firstcomp-comptablee.service';

@Injectable({
  providedIn: 'root'
})
export class OperationsocieteService {
  private _operationSociete: OperationSociete;
  private _operationSociete1: OperationSociete;
  private _operationSocietes: Array<OperationSociete>;
  private _test: Test;
  private _con: Connection;
  private _societe: Societe;
  private _urlBase: String = 'http://localhost:8036/gestion-comptabilite/operationSociete';
  private _urlBaseEtap: String = 'http://localhost:8036/gestion-comptabilite/etape/findByTypeOperation/libelle/';
  private _urlBasesociete: String = 'http://localhost:8036/gestion-comptabilite/societe';
  private _urlBasecon: String = 'http://localhost:8036/gestion-comptabilite/connection';

  private _etapes: Array<Etape>;
  private _operations: Array<OperationSociete>;
  private _etat1: boolean = false;


  constructor(private http: HttpClient, private cardService: CardService, private connectionService: ConnectionService) {
  }

  get operationSociete(): OperationSociete {
    if (this._operationSociete == null) {
      this._operationSociete = new OperationSociete();
    }
    return this._operationSociete;
  }

  set operationSociete(value: OperationSociete) {

    this._operationSociete = value;
  }


  get operationSociete1(): OperationSociete {
    if (this._operationSociete1 == null) {
      this._operationSociete1 = new OperationSociete();
    }
    return this._operationSociete1;
  }

  set operationSociete1(value: OperationSociete) {
    this._operationSociete1 = value;
  }

  get test(): Test {
    if (this._test == null) {
      this._test = new Test();

    }
    return this._test;
  }

  set test(value: Test) {
    this._test = value;
  }

  get operationSocietes(): Array<OperationSociete> {
    if (this._operationSocietes == null) {
      this._operationSocietes = new Array<OperationSociete>();
    }
    return this._operationSocietes;
  }

  set operationSocietes(value: Array<OperationSociete>) {
    this._operationSocietes = value;
  }

  get urlBasecon(): String {
    return this._urlBasecon;
  }

  set urlBasecon(value: String) {
    this._urlBasecon = value;
  }

  get societe(): Societe {
    if (this._societe == null) {
      this._societe = new Societe();
    }
    return this._societe;
  }

  set societe(value: Societe) {
    this._societe = value;
  }

  get con(): Connection {
    if (this._con == null) {
      this._con = new Connection();
    }
    return this._con;
  }

  set con(value: Connection) {
    this._con = value;
  }

  get operations(): Array<OperationSociete> {
    if (this._operations == null) {
      this._operations = new Array<OperationSociete>();
    }
    return this._operations;
  }

  set operations(value: Array<OperationSociete>) {
    this._operations = value;
  }


  get urlBasesociete(): String {
    return this._urlBasesociete;
  }

  set urlBasesociete(value: String) {
    this._urlBasesociete = value;
  }

  get etapes(): Array<Etape> {
    if (this._etapes == null) {
      this._etapes = new Array<Etape>();
    }
    return this._etapes;
  }

  set etapes(value: Array<Etape>) {
    this._etapes = value;
  }

  get urlBase(): String {
    return this._urlBase;
  }

  set urlBase(value: String) {
    this._urlBase = value;
  }


  get urlBaseEtap(): String {
    return this._urlBaseEtap;
  }

  set urlBaseEtap(value: String) {
    this._urlBaseEtap = value;
  }


  get etat1(): boolean {
    return this._etat1;
  }

  set etat1(value: boolean) {
    this._etat1 = value;
  }

  public save() {

    this.http.post<number>(this.urlBase + '/', this.operationSociete).subscribe(
      data => {
        if (data > 0) {
          console.log('bravo Operation');
          alert('l\'operation est bien créer');
          this.cardService.etat = true;
          this.operationSociete = null;


        }

      }, error => {
        console.log('erreur');
      }
    );


  }

  public trouveretapes() {
    this.http.get<Array<Etape>>(this.urlBaseEtap + this.operationSociete.typeOperation.libelle).subscribe(
      data => {
        console.log('bravo trouver les etapes');
        this.etapes = data;
        console.log('bravo');
        console.log(data);


      }, error => {
        console.log('erreur trouver les etapes');
      }
    );
  }

  public findByRef() {
    this.http.get<OperationSociete>(this.urlBase + '/ref/' + this.test.t5).subscribe(
      data => {
        this.operationSocietes = null;
        this.operationSocietes.push(data);
        console.log('bravo koka');
        console.log(data);


      }, error => {
        console.log('erreur trouver les etapes');
      }
    );
  }

  public findByRefsociete() {
    this.http.get<OperationSociete>(this.urlBase + '/ref/' + this.test.t5).subscribe(
      data => {
        this.operationSocietes = null;
        this.operationSocietes.push(data);
        console.log('bravo koka');
        console.log(data);


      }, error => {
        console.log('erreur trouver les etapes');
      }
    );
  }

  public retour() {
    this.cardService.etat = true;

  }

  public findbyIce() {
    this.http.get<Array<OperationSociete>>(this.urlBase + 'ice/' + this.connectionService.connection3.societeLogin.ice).subscribe(
      data => {
        this.operations = data;
        console.log(data);
        console.log(this.connectionService.connection3.societeLogin.ice);
        console.log('bravo trouver les operations');
      }, error => {
        console.log('erreur trouver les operation');
      }
    );
  }

  public save2() {

    this.http.post<number>(this._urlBasesociete + '/', this.societe).subscribe(
      data => {
        if (data > 0) {
          console.log('bravo SOCIETE CREATE');
          alert('la societe est bien créer');
          this.updateSociete();
        }

      }, error => {
        console.log('erreur creation Societe');
      }
    );


  }

  public updateSociete() {
    this.http.put(this.urlBasecon + '/ref/' + this.societe.ice, this.connectionService.connection3).subscribe(
      data => {
        if (data > 0) {
          console.log('bravo update');
          this.connectionService.etat = false;
        }

      }, error => {
        console.log('erreur update');
      }
    );

  }

  public findAll() {
    this.http.get<Array<OperationSociete>>(this.urlBase + '/').subscribe(
      data => {
        this._operationSocietes = data;
        console.log('bravo');

      }, error => {
        console.log('erreur');
      }
    );

  }

  public acceptcompte(operation: OperationSociete, index: number) {
    this.http.put<number>(this.urlBase + '/validateOperationComptable', operation).subscribe(
      data => {
        this.connectionService.listoperationvalidateur.splice(index, 1);
        console.log('bravo accepter operation par le validateur');
        alert('l\'operation est bein validée');
        console.log(data);
      }, error => {
        console.log('erreur accepter operation par  validateur');
      }
    );
  }

  public refuscompte(operation: OperationSociete, index: number) {
    this.http.put<number>(this.urlBase + '/refuseOperationComptable/message/' + this.operationSociete.raison, operation).subscribe(
      data => {
        this.connectionService.listoperationvalidateur.splice(index, 1);
        console.log('bravo refuser operation par le validateur');
        alert('l\'operation est bein refuser');
        console.log(data);
      }, error => {
        console.log('erreur refuser operation par  validateur');
      }
    );
  }


}
