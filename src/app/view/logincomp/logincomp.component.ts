import {Component, OnInit} from '@angular/core';
import {TestserviceService} from '../../controller/service/testservice.service';
import {ConnectionService} from '../../controller/service/connection.service';
import {Connection} from '../../controller/model/connection.model';
import {Test} from '../../controller/model/test.model';

@Component({
  selector: 'app-logincomp',
  templateUrl: './logincomp.component.html',
  styleUrls: ['./logincomp.component.css']
})
export class LogincompComponent implements OnInit {

  constructor(private testserviceService: TestserviceService, private connectionService: ConnectionService) {
  }

  ngOnInit(): void {
  }


  public loger() {
    this.connectionService.loger();
  }

  get connection(): Connection {
    return this.connectionService.connection;
  }

  get teste(): Test {
    return this.connectionService.teste;
  }

  public save() {
    this.connectionService.save();
  }

  get lien(): String {
    return this.connectionService.lien;
  }
}
