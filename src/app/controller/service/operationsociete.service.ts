import {Injectable} from '@angular/core';
import {OperationSociete} from '../model/operation-societe.model';
import {Facture} from '../model/facture.model';
import {HttpClient} from '@angular/common/http';
import {Etape} from '../model/etape.model';

@Injectable({
  providedIn: 'root'
})
export class OperationsocieteService {
  private _operationSociete: OperationSociete;
  private _urlBase: String = 'http://localhost:8036/gestion-comptabilite/operationSociete/';


  constructor(private http: HttpClient) {
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


  get urlBase(): String {
    return this._urlBase;
  }

  set urlBase(value: String) {
    this._urlBase = value;
  }

  public save() {

    this.http.post<number>(this.urlBase + '/', this.operationSociete).subscribe(
      data => {
        if (data > 0) {
          console.log('bravo');
          this.operationSociete = null;
          console.log('bravo');

        }

      }, error => {
        console.log('erreur');
      }
    );


  }


}
