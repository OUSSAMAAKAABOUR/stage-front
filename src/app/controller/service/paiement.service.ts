import {Injectable} from '@angular/core';
import {Paiement} from '../model/paiement.model';
import {HttpClient} from '@angular/common/http';
import {Facture} from '../model/facture.model';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {
  private _paiement: Paiement;
  private _urlBase: String = 'http://localhost:8036/gestion-comptabilite/paiement/';
  private _paiements: Array<Paiement>;

  constructor(private http: HttpClient) {
  }

  get paiement(): Paiement {
    if (this._paiement == null) {
      this._paiement = new Paiement();
    }
    return this._paiement;
  }

  set paiement(value: Paiement) {
    this._paiement = value;
  }


  get paiements(): Array<Paiement> {
    if (this._paiements == null) {
      this._paiements = new Array<Paiement>();
    }
    return this._paiements;
  }

  set paiements(value: Array<Paiement>) {
    this._paiements = value;
  }

  get urlBase(): String {
    return this._urlBase;
  }

  set urlBase(value: String) {
    this._urlBase = value;
  }

  public save() {

    this.http.post<number>(this.urlBase + '', this.paiement).subscribe(
      data => {
        if (data > 0) {
          console.log('bravo');
          this.paiement = null;
          console.log('bravo');

        }

      }, error => {
        console.log('erreur');
      }
    );


  }

  public findAll() {
    this.http.get<Array<Paiement>>(this.urlBase + '').subscribe(
      data => {
        this._paiements = data;

      }, error => {
        console.log('erreur');
      }
    );

  }

  public delete(paiement: Paiement) {
    this.http.delete<number>(this.urlBase + 'ref/' + paiement.ref).subscribe(
      data => {
        console.log(data);
        this.deletebyrefFromview(paiement);


      }, error => {
        console.log('erreur');
      }
    );


  }

  private deletebyrefFromview(paiement: Paiement) {
    const index = this.paiements.findIndex(c => c.ref === paiement.ref);
    if (index !== -1) {
      this.paiements.splice(index, 1);
    }

  }
}
