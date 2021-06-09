import { Component, OnInit } from '@angular/core';
import {PaiementService} from '../../controller/service/paiement.service';
import {Paiement} from '../../controller/model/paiement.model';

@Component({
  selector: 'app-paiement-list',
  templateUrl: './paiement-list.component.html',
  styleUrls: ['./paiement-list.component.css']
})
export class PaiementListComponent implements OnInit {

  constructor(private paiementService: PaiementService) { }


  ngOnInit(): void {
    this.paiementService.findAll();

  }

  get paiements(): Array<Paiement> {
    return this.paiementService.paiements;
  }
  public delete(paiement: Paiement) {
    this.paiementService.delete(paiement);
  }

}
