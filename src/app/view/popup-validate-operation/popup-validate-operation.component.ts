import { Component, OnInit } from '@angular/core';
import {TestserviceService} from "../../controller/service/testservice.service";
import {OperationSociete} from "../../controller/model/operation-societe.model";
import {PopupValidateOperationService} from "../../controller/service/popup-validate-operation.service";

@Component({
  selector: 'app-popup-validate-operation',
  templateUrl: './popup-validate-operation.component.html',
  styleUrls: ['./popup-validate-operation.component.css']
})
export class PopupValidateOperationComponent implements OnInit {

  constructor(private popupValidateOperationService: PopupValidateOperationService,private testService: TestserviceService) { }
  pageSize = 5;
  page = 1;
  ngOnInit(): void {
  }
  get listeOperation(): Array<OperationSociete> {
    return this.testService.listeOperation;
  }
  public validate(operationSociete: OperationSociete, index:number){
    this.popupValidateOperationService.validate(operationSociete, index);
  }
  public refuse(operationSociete: OperationSociete, index:number){
    this.popupValidateOperationService.refuse(operationSociete, index);
  }
}
