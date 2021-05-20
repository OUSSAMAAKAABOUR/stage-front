import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TypeOperation} from "../model/type-operation.model";
import {Etape} from "../model/etape.model";

@Injectable({
  providedIn: 'root'
})
export class ListTypeOperationService {
  private _listtypeopeartion: Array<TypeOperation>;
  private _etapes: Array<Etape>;
  private _b = false;
  private _t: string;
  private _UrltypeOperation = 'http://localhost:8036/gestion-comptabilite/typroperation';
  private _Urletape = 'http://localhost:8036/gestion-comptabilite/etape/';
  constructor(private http: HttpClient) { }

  get b(): boolean {
    return this._b;
  }

  set b(value: boolean) {
    this._b = value;
  }

  get t(): string {
    return this._t;
  }

  set t(value: string) {
    this._t = value;
  }

  get etapes(): Array<Etape> {
    if (this._etapes == null){
      this._etapes = new Array<Etape>();
    }
    return this._etapes;
  }

  set etapes(value: Array<Etape>) {
    this._etapes = value;
  }


  get UrltypeOperation(): string {
    return this._UrltypeOperation;
  }

  set UrltypeOperation(value: string) {
    this._UrltypeOperation = value;
  }

  get Urletape(): string {
    return this._Urletape;
  }

  set Urletape(value: string) {
    this._Urletape = value;
  }

  get listtypeopeartion(): Array<TypeOperation> {
    if (this._listtypeopeartion == null){
      this._listtypeopeartion = new Array<TypeOperation>();
    }
    return this._listtypeopeartion;
  }

  set listtypeopeartion(value: Array<TypeOperation>) {
    this._listtypeopeartion = value;
  }
  public findAll(){
    this.http.get<Array<TypeOperation>>(this.UrltypeOperation + '/').subscribe(
      data =>{
        console.log('bravo findAll');
        this.listtypeopeartion = data;
      }, error => {
        console.log('erreur findAll');
      }
    );
  }
  public trouveretapes(typeoperation: TypeOperation){
    this.http.get<Array<Etape>>(this.Urletape+ 'findByTypeOperation/libelle/' + typeoperation.libelle).subscribe(
      data =>{
        console.log('bravo trouver les etapes');
        this.t = typeoperation.libelle;
        this.etapes = data;
        console.log(data);
        this.b = true;
      }, error => {
        console.log('erreur trouver les etapes');
      }
    );
  }
  public delete2(index : number,libelle : string){
    this.http.delete(this.UrltypeOperation + '/libelle/' + libelle).subscribe(
      data=>{
        console.log('bravo delete typeoperation avec ces etapes');
        this.listtypeopeartion.splice(index, 1);
        alert('vous avez supprimez: ' + data + ' element.');
      }, error => {
        console.log('erreur delete typeoperation avec ces etapes');
      }
    );
  }
  public delete3(index : number, libelle : string){
    this.http.delete(this.Urletape + 'libelle/' + libelle).subscribe(
      data =>{
        console.log('bravo delete etape');
        this.etapes.splice(index, 1);
        alert('vous avez supprimez: ' + data + ' element');
      }, error => {
        console.log('erreur delete etape');
      }

    );
  }
}
