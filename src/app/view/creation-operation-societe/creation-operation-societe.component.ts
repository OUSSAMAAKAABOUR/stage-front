import { Component, OnInit } from '@angular/core';
import {OperationsocieteService} from '../../controller/service/operationsociete.service';
import {OperationSociete} from '../../controller/model/operation-societe.model';
import {Etape} from '../../controller/model/etape.model';
import {ConnectionService} from '../../controller/service/connection.service';
import {Connection} from '../../controller/model/connection.model';

@Component({
  selector: 'app-creation-operation-societe',
  templateUrl: './creation-operation-societe.component.html',
  styleUrls: ['./creation-operation-societe.component.css']
})
export class CreationOperationSocieteComponent implements OnInit {
  constructor(private operatioSocieteService: OperationsocieteService,private connectionService: ConnectionService) {
  }

  ngOnInit(): void {
  }

  get operationSociete(): OperationSociete {
    return this.operatioSocieteService.operationSociete;
  }

  public save() {
    this.operationSociete.societe.ice = this.connection3.societeLogin.ice;
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
  public retour() {
    this.operatioSocieteService.retour();
  }

  get connection3(): Connection {
    return this.connectionService.connection3;
  }


}
