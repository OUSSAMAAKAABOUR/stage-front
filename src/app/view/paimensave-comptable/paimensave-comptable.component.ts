import { Component, OnInit } from '@angular/core';
import {PaiementService} from "../../controller/service/paiement.service";
import {Paiement} from "../../controller/model/paiement.model";

@Component({
  selector: 'app-paimensave-comptable',
  templateUrl: './paimensave-comptable.component.html',
  styleUrls: ['./paimensave-comptable.component.css']
})
export class PaimensaveComptableComponent implements OnInit {

  constructor(private paiementService: PaiementService) { }

  ngOnInit(): void {
  }
  public save() {
    this.paiementService.save();
  }

  get paiement(): Paiement {
    return this.paiementService.paiement;

  }
  get paiements(): Array<Paiement> {
    return this.paiementService.paiements;
  }
  public delete(paiement: Paiement) {
    this.paiementService.delete(paiement);
  }

}
