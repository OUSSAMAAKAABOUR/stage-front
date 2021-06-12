import { Component, OnInit } from '@angular/core';
import {FactureService} from "../../controller/service/facture.service";
import {Facture} from "../../controller/model/facture.model";

@Component({
  selector: 'app-facturesave-comptable',
  templateUrl: './facturesave-comptable.component.html',
  styleUrls: ['./facturesave-comptable.component.css']
})
export class FacturesaveComptableComponent implements OnInit {

  constructor(private factureService: FactureService) { }

  ngOnInit(): void {
  }
  get facture(): Facture {
    return this.factureService.facture;
  }
  public save() {
    this.factureService.save();
  }
}
