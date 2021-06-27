import { Component, OnInit } from '@angular/core';
import {CardService} from '../../controller/service/card.service';
import {OperationsocieteService} from '../../controller/service/operationsociete.service';
import {OperationSociete} from '../../controller/model/operation-societe.model';
import {Etape} from '../../controller/model/etape.model';
import {Connection} from '../../controller/model/connection.model';
import {ConnectionService} from '../../controller/service/connection.service';

@Component({
  selector: 'app-type-operation2',
  templateUrl: './type-operation2.component.html',
  styleUrls: ['./type-operation2.component.css']
})
export class TypeOperation2Component implements OnInit {

  constructor(private card: CardService, private connectionService: ConnectionService, private operatioSocieteService: OperationsocieteService) {
  }

  ngOnInit(): void {
  }

  public change1() {
    this.operationSociete.typeOperation.libelle = 'T1';
    this.card.change();
  }

  public change2() {
    this.operationSociete.typeOperation.libelle = 'T2';
    this.card.change();
  }

  public change3() {
    this.operationSociete.typeOperation.libelle = 'T3';
    this.card.change();
  }

  public change4() {
    this.operationSociete.typeOperation.libelle = 'T4';
    this.card.change();
  }

  public change5() {
    this.operationSociete.typeOperation.libelle = 'T5';
    this.card.change();
  }

  public change6() {
    this.operationSociete.typeOperation.libelle = 'T6';
    this.card.change();
  }

  get etat(): boolean {
    return this.card.etat;
  }

  get operationSociete(): OperationSociete {
    return this.operatioSocieteService.operationSociete;
  }

  public save() {


    this.operatioSocieteService.save();
  }

  get etapes(): Array<Etape> {
    return this.operatioSocieteService.etapes;
  }

  public trouveretapes() {
    this.operatioSocieteService.trouveretapes();
  }

  get etat1(): boolean {
    return this.operatioSocieteService.etat1;
  }
  get connection3(): Connection {
    return this.connectionService.connection3;
  }

}
