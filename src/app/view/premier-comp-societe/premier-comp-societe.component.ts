import { Component, OnInit } from '@angular/core';
import {Connection} from '../../controller/model/connection.model';
import {ValidateCompteService} from '../../controller/service/validate-compte.service';
import {ConnectionService} from '../../controller/service/connection.service';

@Component({
  selector: 'app-premier-comp-societe',
  templateUrl: './premier-comp-societe.component.html',
  styleUrls: ['./premier-comp-societe.component.css']
})
export class PremierCompSocieteComponent implements OnInit {

  constructor(private connectionService: ConnectionService) { }

  ngOnInit(): void {
  }
  get connection3(): Connection {
    return this.connectionService.connection3;
  }

}
