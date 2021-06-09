import { Component, OnInit } from '@angular/core';
import {TestserviceService} from "../../controller/service/testservice.service";
import {MatDialog} from "@angular/material/dialog";
import {PopupValidateOperationComponent} from "../popup-validate-operation/popup-validate-operation.component";
import {OperationSociete} from "../../controller/model/operation-societe.model";
import {PopupCreateComptableComponent} from "../popup-create-comptable/popup-create-comptable.component";
import {AffecterComptableService} from "../../controller/service/affecter-comptable.service";
import {ValidateCompteService} from "../../controller/service/validate-compte.service";
import {PopupValidateCompteComponent} from "../popup-validate-compte/popup-validate-compte.component";

@Component({
  selector: 'app-secondcomp',
  templateUrl: './secondcomp.component.html',
  styleUrls: ['./secondcomp.component.css']
})
export class SecondcompComponent implements OnInit {

  constructor(private affecterComptableServoce:AffecterComptableService,private testserviceService: TestserviceService,public dialog: MatDialog,private validateCompteService: ValidateCompteService) { }

  ngOnInit(): void {
  }
  public findoperation(){
    this.testserviceService.findoperation();
  }
  openDialog(){
    this.findoperation();
    this.dialog.open(PopupValidateOperationComponent);
  }
  opendialog2(){
    this.dialog.open(PopupCreateComptableComponent);
  }
  opendialog3(){
    this.findcompte();
    this.dialog.open(PopupValidateCompteComponent);
  }
  public findOperationWhereComptablenull(){
    this.affecterComptableServoce.findOperationWhereComptablenull();
  }
  get listeOperation(): Array<OperationSociete> {
    return this.testserviceService.listeOperation;
  }
  get x(): boolean {
    return this.testserviceService.x;
  }
  get y(): boolean {
    return this.testserviceService.y;
  }
  get w(): boolean {
    return this.testserviceService.w;
  }
  public methode2second1facturechoice(){
    this.testserviceService.methode2second1facturechoice();
  }
  public methode2second1operationchoice() {
    this.testserviceService.methode2second1operationchoice();
  }
  public methode2second1declarationchoice(){
    this.testserviceService.methode2second1declarationchoice();
  }
  public findcompte(){
    this.validateCompteService.findcompte();
  }
}
