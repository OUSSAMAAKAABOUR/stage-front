import { Component, OnInit } from '@angular/core';
import {DeclatvacriteriaService} from "../../controller/service/declatvacriteria.service";
import {DeclarationTva} from "../../controller/model/declaration-tva.model";
import {ConnectionService} from '../../controller/service/connection.service';
import {Connection} from '../../controller/model/connection.model';

@Component({
  selector: 'app-decl-tva-list-societe',
  templateUrl: './decl-tva-list-societe.component.html',
  styleUrls: ['./decl-tva-list-societe.component.css']
})
export class DeclTvaListSocieteComponent implements OnInit {
  page2 = 1;
  pageSize2 = 1;
  constructor(private declTvaCriteriaService: DeclatvacriteriaService,private connectionService: ConnectionService) { }

  ngOnInit(): void {
  }
  get listdeclTvapourSociete(): Array<DeclarationTva> {
    return this.declTvaCriteriaService.listdeclTvapourSociete;
  }
  get connection3(): Connection {
    return this.connectionService.connection3;
  }
}
