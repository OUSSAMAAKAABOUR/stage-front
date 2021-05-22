import {Component, OnInit} from '@angular/core';
import {PaiementService} from '../../controller/service/paiement.service';
import {Paiement} from '../../controller/model/paiement.model';
import {Facture} from '../../controller/model/facture.model';

@Component({
  selector: 'app-paiement-save',
  templateUrl: './paiement-save.component.html',
  styleUrls: ['./paiement-save.component.css']
})
export class PaiementSaveComponent implements OnInit {

  constructor(private paiementService: PaiementService) {
  }

  ngOnInit(): void {
    this.paiementService.findAll();
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
