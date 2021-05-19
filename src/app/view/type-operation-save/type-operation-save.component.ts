import { Component, OnInit } from '@angular/core';
import {TypeOperation} from "../../controller/model/type-operation.model";
import {TypeoperationService} from "../../controller/service/typeoperation.service";
import {Etape} from "../../controller/model/etape.model";

@Component({
  selector: 'app-type-operation-save',
  templateUrl: './type-operation-save.component.html',
  styleUrls: ['./type-operation-save.component.css']
})
export class TypeOperationSaveComponent implements OnInit {

  constructor(private typeOperationService: TypeoperationService) { }

  ngOnInit(): void {
  }
  get typeoperation(): TypeOperation {
    return this.typeOperationService.typeoperation;
  }
  get etape(): Etape {
    return this.typeOperationService.etape;
  }
  get a(): boolean {
    return this.typeOperationService.a;
  }
  public add(){
    this.typeOperationService.add();
  }
  public delete1(index: number){
    this.typeoperation.etapes.splice(index, 1);
  }
  public save() {
    this.typeOperationService.save();
  }
}
