import { Component, OnInit } from '@angular/core';
import {AffecterComptableService} from "../../controller/service/affecter-comptable.service";
import {OperationSociete} from "../../controller/model/operation-societe.model";
import {MatDialog} from "@angular/material/dialog";
import {ChoisirComptableComponent} from "../choisir-comptable/choisir-comptable.component";

@Component({
  selector: 'app-affecter-comptable',
  templateUrl: './affecter-comptable.component.html',
  styleUrls: ['./affecter-comptable.component.css']
})
export class AffecterComptableComponent implements OnInit {

  constructor(private affecterComptableService: AffecterComptableService,public dialog: MatDialog) { }
  pageSize2 = 1;
  page2 = 1;
  ngOnInit(): void {
    this.affecterComptableService.findOperationWhereComptablenull();
  }
  public popupComptableValidateur(operationSociete: OperationSociete){
    this.affecterComptableService.a = true;
    this.affecterComptableService.operationSociete = operationSociete;
    this.dialog.open(ChoisirComptableComponent);
  }
  public popupComptableTraiteur(operationSociete: OperationSociete){
    this.affecterComptableService.a = false;
    this.affecterComptableService.operationSociete = operationSociete;
    this.dialog.open(ChoisirComptableComponent);
  }
  get listeOperation(): Array<OperationSociete> {
    return this.affecterComptableService.listeOperation;
  }
  get a(): boolean {
    return this.affecterComptableService.a;
  }
}
