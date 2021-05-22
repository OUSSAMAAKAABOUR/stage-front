import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private _etat: boolean = true;

  constructor() {
  }


  get etat(): boolean {
    return this._etat;
  }

  set etat(value: boolean) {
    this._etat = value;
  }

  public change() {
    this.etat = false;

  }
}
