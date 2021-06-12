import { Component, OnInit } from '@angular/core';
import {FactureService} from "../../controller/service/facture.service";

@Component({
  selector: 'app-facturechoice-comptable',
  templateUrl: './facturechoice-comptable.component.html',
  styleUrls: ['./facturechoice-comptable.component.css']
})
export class FacturechoiceComptableComponent implements OnInit {

  constructor(private factureService: FactureService) { }

  ngOnInit(): void {
  }
  public findfacturesforcomptable(){
    this.factureService.findfacturesforcomptable();
  }
}
