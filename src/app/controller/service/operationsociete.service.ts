import {Injectable} from '@angular/core';
import {OperationSociete} from '../model/operation-societe.model';
import {Facture} from '../model/facture.model';
import {HttpClient} from '@angular/common/http';
import {Etape} from '../model/etape.model';
import {TypeOperation} from '../model/type-operation.model';
import {CardService} from './card.service';

@Injectable({
  providedIn: 'root'
})
export class OperationsocieteService {
  private _operationSociete: OperationSociete;
  private _urlBase: String = 'http://localhost:8036/gestion-comptabilite/operationSociete/';
  private _urlBaseEtap: String = 'http://localhost:8036/gestion-comptabilite/etape/findByTypeOperation/libelle/';
  private _etapes: Array<Etape>;
  private _etat1: boolean = false;


  constructor(private http: HttpClient, private cardService: CardService) {
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
          console.log('bravo');
          alert('l\'operation est bien créer');
          this.cardService.etat = true;
          this.operationSociete = null;
          console.log('bravo');

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
  public retour() {
    this.cardService.etat = true;

  }



}
