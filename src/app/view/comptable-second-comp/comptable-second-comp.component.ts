import { Component, OnInit } from '@angular/core';
import {ConnectionService} from "../../controller/service/connection.service";
import {Connection} from "../../controller/model/connection.model";

@Component({
  selector: 'app-comptable-second-comp',
  templateUrl: './comptable-second-comp.component.html',
  styleUrls: ['./comptable-second-comp.component.css']
})
export class ComptableSecondCompComponent implements OnInit {

  constructor( private connectionService: ConnectionService) { }

  ngOnInit(): void {
  }
  get connection3(): Connection {
    return this.connectionService.connection3;
  }
}
