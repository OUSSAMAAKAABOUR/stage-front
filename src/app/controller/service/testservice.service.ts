import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {FacturechoicecompComponent} from "../../view/facturechoicecomp/facturechoicecomp.component";

@Injectable({
  providedIn: 'root'
})
export class TestserviceService {
  private _x = true;
  private _y = false;
  private _w = false;
  private _k = false;
  private _l = false;
  constructor(private router: Router) { }

  get k(): boolean {
    return this._k;
  }

  set k(value: boolean) {
    this._k = value;
  }

  get l(): boolean {
    return this._l;
  }

  set l(value: boolean) {
    this._l = value;
  }

  get x(): boolean {
    return this._x;
  }

  set x(value: boolean) {
    this._x = value;
  }

  get y(): boolean {
    return this._y;
  }

  set y(value: boolean) {
    this._y = value;
  }

  get w(): boolean {
    return this._w;
  }

  set w(value: boolean) {
    this._w = value;
  }
  public methode1login(){
    this.router.navigate(['/secondcomp']);
    this.x = false;
    this.y = true;
  }
  public methode2second1facturechoice(){
    this.y = false; this.x = false; this.l = false; this.k = true;
    this.w = true;
  }
  public methode2second1operationchoice(){
    this.y = false; this.x = false; this.w = false; this.l = false;
    this.k = true;
  }
  public methode2second1declarationchoice(){
    this.y = false; this.x = false; this.w = false; this.k = false;
    this.l = true;
  }
}
