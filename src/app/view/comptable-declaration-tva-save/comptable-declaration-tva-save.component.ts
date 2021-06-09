import { Component, OnInit } from '@angular/core';
import {PopupFactureComponent} from "../popup-facture/popup-facture.component";
import {DeclarationTva} from "../../controller/model/declaration-tva.model";
import {DeclarationTvaVo2} from "../../controller/model/declaration-tva-vo2.model";
import {Facture} from "../../controller/model/facture.model";
import {DeclarationtvaService} from "../../controller/service/declarationtva.service";
import {MatDialog} from "@angular/material/dialog";
import {PopupService} from "../../controller/service/popup.service";

@Component({
  selector: 'app-comptable-declaration-tva-save',
  templateUrl: './comptable-declaration-tva-save.component.html',
  styleUrls: ['./comptable-declaration-tva-save.component.css']
})
export class ComptableDeclarationTvaSaveComponent implements OnInit {
  public page = 1;
  public page2 = 1;
  public pageSize = 1;
  constructor(private declarationtvaservice: DeclarationtvaService, public dialog: MatDialog, private popupservice: PopupService) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.popupservice.facture = null;
    this.popupservice.b = false;
    this.popupservice.a = true;
    this.dialog.open(PopupFactureComponent);
  }
  get decltva(): DeclarationTva {
    return this.declarationtvaservice.decltva;
  }
  get a(): boolean {
    return this.declarationtvaservice.a;
  }
  get b(): boolean {
    return this.declarationtvaservice.b;
  }
  get c(): boolean {
    return this.declarationtvaservice.c;
  }
  public test(){
    this.declarationtvaservice.test();
  }
  public trvfacuresandcalcultva(){
    this.declarationtvaservice.trvfacuresandcalcultva();
  }
  get declarationtvavo2(): DeclarationTvaVo2 {
    return this.declarationtvaservice.declarationtvavo2;
  }
  public save() {
    this.declarationtvaservice.save();
  }
  public delete1(index: number,facture: Facture) {
    this.declarationtvaservice.delete1(index,facture);
  }
  public popupupdate(facture: Facture){
    this.popupservice.a = false;
    this.popupservice.b = true;
    this.popupservice.popupupdate(facture);
  }
  public savebrouillon(){
    this.declarationtvaservice.savebrouillon();
  }
  public savepourComptable(){
    this.declarationtvaservice.savepourComptable();
  }
  public savebrouillonpourComptable(){
    this.declarationtvaservice.savebrouillonpourComptable();
  }
}
