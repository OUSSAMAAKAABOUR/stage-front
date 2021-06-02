import {Component, OnInit} from '@angular/core';
import {OperationsocieteService} from '../../controller/service/operationsociete.service';
import {OperationSociete} from '../../controller/model/operation-societe.model';
import {Connection} from '../../controller/model/connection.model';
import {Societe} from '../../controller/model/societe.model';
import {ConnectionService} from '../../controller/service/connection.service';

@Component({
  selector: 'app-first-comp-societe',
  templateUrl: './first-comp-societe.component.html',
  styleUrls: ['./first-comp-societe.component.css']
})
export class FirstCompSocieteComponent implements OnInit {

  constructor(private operatioSocieteService: OperationsocieteService, private connectionService: ConnectionService) {
  }

  ngOnInit(): void {

  }

  get operationsse(): Array<OperationSociete> {
    return this.connectionService.operationsse;
  }




    get con(): Connection {
    return this.operatioSocieteService.con;
  }

  get operations(): Array<OperationSociete> {
    return this.operatioSocieteService.operations;
  }

  get societe(): Societe {
    return this.operatioSocieteService.societe;
  }

  public save2() {
    this.operatioSocieteService.save2();
  }

  get connection2(): Connection {
    return this.connectionService.connection2;
  }

  public getLogin() {
    this.connectionService.getLogin();
  }

  get etat(): boolean {
    return this.connectionService.etat;
  }

}
