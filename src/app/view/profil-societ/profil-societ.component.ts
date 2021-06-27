import { Component, OnInit } from '@angular/core';
import {ConnectionService} from '../../controller/service/connection.service';
import {Connection} from '../../controller/model/connection.model';

@Component({
  selector: 'app-profil-societ',
  templateUrl: './profil-societ.component.html',
  styleUrls: ['./profil-societ.component.css']
})
export class ProfilSocietComponent implements OnInit {
  constructor(private connectionService: ConnectionService) { }

  ngOnInit(): void {
  }
  get connection3(): Connection {
    return this.connectionService.connection3;
  }
}
