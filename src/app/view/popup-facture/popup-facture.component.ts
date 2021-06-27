import {Component, OnInit} from '@angular/core';
import {PopupService} from '../../controller/service/popup.service';
import {Facture} from '../../controller/model/facture.model';
import {DeclarationtvaService} from '../../controller/service/declarationtva.service';
import {DeclarationTva} from '../../controller/model/declaration-tva.model';
import {DeclatvacriteriaService} from '../../controller/service/declatvacriteria.service';
import {FactureService} from '../../controller/service/facture.service';

@Component({
  selector: 'app-popup-facture',
  templateUrl: './popup-facture.component.html',
  styleUrls: ['./popup-facture.component.css']
})
export class PopupFactureComponent implements OnInit {

  constructor(private popupService: PopupService, private factureService: FactureService, private declatvacriteriaServive: DeclatvacriteriaService) {
  }

  ngOnInit(): void {
  }

  get a(): boolean {
    return this.popupService.a;
  }

  get b(): boolean {
    return this.popupService.b;
  }

  /*get facture(): Facture {
    return this.popupService.facture;
  }
  public save(){
    this.popupService.save();
  }
  public update(){
    this.popupService.update();
  }
  public refresh(){
    this.declatvacriteriaServive.refresh();
  } */
  get facture(): Facture {
    return this.factureService.facture;
  }

  public save() {
    this.factureService.save();
  }

  public refresh() {
    this.declatvacriteriaServive.refresh();
  }




}
