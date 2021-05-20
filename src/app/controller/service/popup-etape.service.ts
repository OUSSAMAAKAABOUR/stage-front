import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {Etape} from "../model/etape.model";
import {Facture} from "../model/facture.model";
import {PopupFactureComponent} from "../../view/popup-facture/popup-facture.component";
import {TypeoperationService} from "./typeoperation.service";
import {PopupEtapeComponent} from "../../view/popup-etape/popup-etape.component";

@Injectable({
  providedIn: 'root'
})
export class PopupEtapeService {
  private _etape: Etape;
  private _a = false;
  private _b = false;
  private _Urletape = 'http://localhost:8036/gestion-comptabilite/etape/';
  constructor(private http: HttpClient, public dialog: MatDialog) { }

  get Urletape(): string {
    return this._Urletape;
  }

  set Urletape(value: string) {
    this._Urletape = value;
  }

  get a(): boolean {
    return this._a;
  }

  set a(value: boolean) {
    this._a = value;
  }

  get b(): boolean {
    return this._b;
  }

  set b(value: boolean) {
    this._b = value;
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
  public save(){

  }
  public update(){
    this.http.put(this._Urletape +'', this.etape).subscribe(
      data =>{
          console.log('bravo update etape');
      }, error => {
        console.log('erreur update etape');
      }
    );
  }
  public refresh(){

  }
  public popupupdate(etape: Etape){
    this.etape = this.cloneEtape(etape);
    this.dialog.open(PopupEtapeComponent);
  }
  public cloneEtape(etape: Etape){
    const Myclone = new Etape();
    Myclone.id = etape.id;
    Myclone.description = etape.description;
    Myclone.libelle = etape.libelle;
    Myclone.delai = etape.delai;
    Myclone.montantfix = etape.montantfix;
    Myclone.montantcomptable = etape.montantcomptable;
    Myclone.typeOperation = etape.typeOperation;
    return Myclone;
  }
}
