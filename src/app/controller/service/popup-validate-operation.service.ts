import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {OperationSociete} from "../model/operation-societe.model";
import {TestserviceService} from "./testservice.service";

@Injectable({
  providedIn: 'root'
})
export class PopupValidateOperationService {
  private _UrlBaseOperationSociete = 'http://localhost:8036/gestion-comptabilite/operationSociete';
  constructor(private http: HttpClient,private testservice: TestserviceService) { }

  get UrlBaseOperationSociete(): string {
    return this._UrlBaseOperationSociete;
  }

  set UrlBaseOperationSociete(value: string) {
    this._UrlBaseOperationSociete = value;
  }

  public validate(operationSociete: OperationSociete, index:number){
    this.http.put<number>(this.UrlBaseOperationSociete + "/validate", operationSociete).subscribe(
      data =>{
         this.testservice.listeOperation.splice(index, 1);
         console.log('bravo operation valider');
      }, error => {
        console.log('erreur de validation de l operation');
      }
    );
  }
  public refuse(operationSociete: OperationSociete, index:number){
    this.http.put<number>(this.UrlBaseOperationSociete + "/refuse", operationSociete).subscribe(
      data =>{
        this.testservice.listeOperation.splice(index, 1);
        console.log('bravo operation refuser');
      }, error => {
        console.log('erreur lors de refuse de l operation');
      }
    );
  }
}
