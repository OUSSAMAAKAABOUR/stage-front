import {Injectable} from '@angular/core';
import {Paiement} from '../model/paiement.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {
  private _paiement: Paiement;
  private _urlBase: String = 'http://localhost:8036/gestion-comptabilite/paiement/';

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
}
