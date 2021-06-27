import { Component, OnInit } from '@angular/core';
import {Connection} from '../../controller/model/connection.model';
import {ConnectionService} from '../../controller/service/connection.service';

@Component({
  selector: 'app-profil-comptable',
  templateUrl: './profil-comptable.component.html',
  styleUrls: ['./profil-comptable.component.css']
})
export class ProfilComptableComponent implements OnInit {

  constructor(private connectionService: ConnectionService) { }

  ngOnInit(): void {
  }
  get connection3(): Connection {
    return this.connectionService.connection3;
  }
}
