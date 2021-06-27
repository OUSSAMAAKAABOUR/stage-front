import { Component, OnInit } from '@angular/core';
import {Connection} from '../../controller/model/connection.model';
import {ConnectionService} from '../../controller/service/connection.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(private connectionService: ConnectionService) { }

  ngOnInit(): void {
  }

  get connection3(): Connection {
    return this.connectionService.connection3;
  }
}
