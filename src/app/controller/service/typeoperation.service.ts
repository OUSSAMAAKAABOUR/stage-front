import {Injectable} from '@angular/core';
import {TypeOperation} from "../model/type-operation.model";
import {Etape} from "../model/etape.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TypeoperationService {
  private _typeoperation: TypeOperation;
  private _a = false;
  private _etape: Etape;
  private _UrltypeOperation = 'http://localhost:8036/gestion-comptabilite/typroperation';

  constructor(private http: HttpClient) {
  }

  get etape(): Etape {
    if (this._etape == null){
      this._etape = new Etape();
    }
    return this._etape;
  }

  set etape(value: Etape) {
    this._etape = value;
  }

  get UrltypeOperation(): string {
    return this._UrltypeOperation;
  }

  set UrltypeOperation(value: string) {
    this._UrltypeOperation = value;
  }

  get a(): boolean {
    return this._a;
  }

  set a(value: boolean) {
    this._a = value;
  }

  get typeoperation(): TypeOperation {
    if (this._typeoperation == null) {
      this._typeoperation = new TypeOperation();
    }
    return this._typeoperation;
  }

  set typeoperation(value: TypeOperation) {
    this._typeoperation = value;
  }

  public add() {
    this.typeoperation.etapes.push(this.cloneEtape(this.etape));
    this.a = true;
    this.etape = null;
  }

  public save() {
    this.http.post<number>(this.UrltypeOperation + '/', this.typeoperation).subscribe(
      data => {
        if (data > 0) {
          console.log('bravo save type operation avec ces etapes');
        }
      }, error => {
        console.log('erreur save type operation avec ces etapes');
      }
    );
  }

  private cloneEtape(etape: Etape) {
    const Myclone = new Etape();
    Myclone.description = etape.description;
    Myclone.libelle = etape.libelle;
    Myclone.delai = etape.delai;
    Myclone.montantfix = etape.montantfix;
    Myclone.montantcomptable = etape.montantcomptable;
    return Myclone;
  }
}
