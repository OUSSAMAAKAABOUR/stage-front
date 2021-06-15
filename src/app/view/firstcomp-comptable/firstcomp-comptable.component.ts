import { Component, OnInit } from '@angular/core';
import {FirstcompComptableeService} from "../../controller/service/firstcomp-comptablee.service";
import {Router} from "@angular/router";
import {ConnectionService} from "../../controller/service/connection.service";
import {OperationSociete} from "../../controller/model/operation-societe.model";
import {Connection} from "../../controller/model/connection.model";

@Component({
  selector: 'app-firstcomp-comptable',
  templateUrl: './firstcomp-comptable.component.html',
  styleUrls: ['./firstcomp-comptable.component.css']
})
export class FirstcompComptableComponent implements OnInit {

  constructor(private firstcompcomptableService: FirstcompComptableeService,private route: Router,private connectionService: ConnectionService) { }

  ngOnInit(): void {
  }
  get listoperation(): Array<OperationSociete> {
    return this.connectionService.listoperation;
  }
  public findoperationforcomptable(){
    this.firstcompcomptableService.findoperationforcomptable();
  }
  public traiter(operationsociete: OperationSociete){
    this.route.navigateByUrl('/comptablesecondcomp');
    this.firstcompcomptableService.traiter(operationsociete);
  }
  get connection3(): Connection {
    return this.connectionService.connection3;
  }
}
