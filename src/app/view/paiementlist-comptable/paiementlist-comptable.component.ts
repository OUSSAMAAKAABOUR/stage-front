import { Component, OnInit } from '@angular/core';
import {PaiementService} from "../../controller/service/paiement.service";
import {Paiement} from "../../controller/model/paiement.model";

@Component({
  selector: 'app-paiementlist-comptable',
  templateUrl: './paiementlist-comptable.component.html',
  styleUrls: ['./paiementlist-comptable.component.css']
})
export class PaiementlistComptableComponent implements OnInit {

  constructor(private paiementService: PaiementService) { }

  ngOnInit(): void {
  }
  public delete(paiement: Paiement) {
    this.paiementService.delete(paiement);
  }
  get paiements2(): Array<Paiement> {
    return this.paiementService.paiements2;
  }
}
