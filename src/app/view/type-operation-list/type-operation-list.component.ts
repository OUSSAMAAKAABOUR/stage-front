import { Component, OnInit } from '@angular/core';
import {ListTypeOperationService} from "../../controller/service/list-type-operation.service";
import {TypeOperation} from "../../controller/model/type-operation.model";
import {Etape} from "../../controller/model/etape.model";

@Component({
  selector: 'app-type-operation-list',
  templateUrl: './type-operation-list.component.html',
  styleUrls: ['./type-operation-list.component.css']
})
export class TypeOperationListComponent implements OnInit {

  constructor(private listTypeOperationService: ListTypeOperationService) { }

  ngOnInit(): void {
    this.listTypeOperationService.findAll();
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

}
