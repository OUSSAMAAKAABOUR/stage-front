import {Component, OnInit} from '@angular/core';
import {TestserviceService} from '../../controller/service/testservice.service';
import {ConnectionService} from '../../controller/service/connection.service';

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

  get x(): boolean {
    return this.testserviceService.x;
  }

  get y(): boolean {
    return this.testserviceService.y;
  }

  get w(): boolean {
    return this.testserviceService.w;
  }

  public methode1login() {
    this.testserviceService.methode1login();
  }

  public verify() {
    this.connectionService.verify();
  }
}
