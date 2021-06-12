import { Component, OnInit } from '@angular/core';
import {TestserviceService} from "../../controller/service/testservice.service";
import {Connection} from '../../controller/model/connection.model';
import {ConnectionService} from '../../controller/service/connection.service';

@Component({
  selector: 'app-declarationtvachoicecomp',
  templateUrl: './declarationtvachoicecomp.component.html',
  styleUrls: ['./declarationtvachoicecomp.component.css']
})
export class DeclarationtvachoicecompComponent implements OnInit {

  constructor(private testserviceService: TestserviceService,private connectionService:ConnectionService) { }

  ngOnInit(): void {
  }
  get l(): boolean {
    return this.testserviceService.l;
  }
  get connection3(): Connection {
    return this.connectionService.connection3;
  }
}
