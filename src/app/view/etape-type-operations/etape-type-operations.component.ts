import { Component, OnInit } from '@angular/core';
import {ListTypeOperationService} from '../../controller/service/list-type-operation.service';
import {PopupEtapeService} from '../../controller/service/popup-etape.service';
import {TypeOperation} from '../../controller/model/type-operation.model';
import {Etape} from '../../controller/model/etape.model';

@Component({
  selector: 'app-etape-type-operations',
  templateUrl: './etape-type-operations.component.html',
  styleUrls: ['./etape-type-operations.component.css']
})
export class EtapeTypeOperationsComponent implements OnInit {
   page = 1;
   pageSize = 1;
  constructor(private listTypeOperationService: ListTypeOperationService, private popupEtapeService: PopupEtapeService) { }

  ngOnInit(): void {
  }
  get listtypeopeartion(): Array<TypeOperation> {
    return this.listTypeOperationService.listtypeopeartion;
  }
  get etapes(): Array<Etape> {
    return this.listTypeOperationService.etapes;
  }
  get b(): boolean {
    return this.listTypeOperationService.b;
  }
  get t(): string {
    return this.listTypeOperationService.t;
  }
  public trouveretapes(typeoperation: TypeOperation){
    this.listTypeOperationService.trouveretapes(typeoperation);
  }
  public delete2(index : number,libelle : string){
    this.listTypeOperationService.delete2(index, libelle );
  }
  public delete3(index : number, libelle : string){
    this.listTypeOperationService.delete3(index, libelle);
  }
  public popupupdate(etape: Etape){
    this.popupEtapeService.a = false;
    this.popupEtapeService.b = true;
    this.popupEtapeService.popupupdate(etape);
  }
}
