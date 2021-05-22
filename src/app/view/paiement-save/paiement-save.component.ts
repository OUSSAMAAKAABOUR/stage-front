import {Component, OnInit} from '@angular/core';
import {PaiementService} from '../../controller/service/paiement.service';
import {Paiement} from '../../controller/model/paiement.model';

@Component({
  selector: 'app-paiement-save',
  templateUrl: './paiement-save.component.html',
  styleUrls: ['./paiement-save.component.css']
})
export class PaiementSaveComponent implements OnInit {

  constructor(private paiementService: PaiementService) {
  }

  ngOnInit(): void {
  }

  public save() {
    this.paiementService.save();
  }

  get paiement(): Paiement {
    return this.paiementService.paiement;

  }
}
