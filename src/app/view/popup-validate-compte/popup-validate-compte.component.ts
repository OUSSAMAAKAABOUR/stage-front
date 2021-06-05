import { Component, OnInit } from '@angular/core';
import {ValidateCompteService} from "../../controller/service/validate-compte.service";
import {Connection} from "../../controller/model/connection.model";

@Component({
  selector: 'app-popup-validate-compte',
  templateUrl: './popup-validate-compte.component.html',
  styleUrls: ['./popup-validate-compte.component.css']
})
export class PopupValidateCompteComponent implements OnInit {
  page = 1;
  pageSize = 1;
  constructor(private validateCompteService: ValidateCompteService ) { }

  ngOnInit(): void {
  }
  get listcomptes(): Array<Connection> {
    return this.validateCompteService.listcomptes;
  }
  public acceptcompte(connection: Connection, index: number){
    this.validateCompteService.acceptcompte(connection, index);
  }
  public refusercompte(connection: Connection, index: number){
    this.validateCompteService.refusercompte(connection, index);
  }
}
