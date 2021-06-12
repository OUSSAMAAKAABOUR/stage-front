import { Component, OnInit } from '@angular/core';
import {DeclatvacriteriaService} from "../../controller/service/declatvacriteria.service";
import {DeclarationTva} from "../../controller/model/declaration-tva.model";

@Component({
  selector: 'app-decl-tva-list-societe',
  templateUrl: './decl-tva-list-societe.component.html',
  styleUrls: ['./decl-tva-list-societe.component.css']
})
export class DeclTvaListSocieteComponent implements OnInit {
  page2 = 1;
  pageSize2 = 1;
  constructor(private declTvaCriteriaService: DeclatvacriteriaService) { }

  ngOnInit(): void {
  }
  get listdeclTvapourSociete(): Array<DeclarationTva> {
    return this.declTvaCriteriaService.listdeclTvapourSociete;
  }
}
