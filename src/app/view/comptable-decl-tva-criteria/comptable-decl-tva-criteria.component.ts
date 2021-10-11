import { Component, OnInit } from '@angular/core';
import {DeclarationTvaCriteria} from "../../controller/model/declaration-tva-criteria.model";
import {DeclarationTva} from "../../controller/model/declaration-tva.model";
import {DeclarationTvaVo2} from "../../controller/model/declaration-tva-vo2.model";
import {Facture} from "../../controller/model/facture.model";
import {DeclatvacriteriaService} from "../../controller/service/declatvacriteria.service";
import {DeclarationtvaService} from "../../controller/service/declarationtva.service";
import {PopupService} from "../../controller/service/popup.service";

@Component({
  selector: 'app-comptable-decl-tva-criteria',
  templateUrl: './comptable-decl-tva-criteria.component.html',
  styleUrls: ['./comptable-decl-tva-criteria.component.css']
})
export class ComptableDeclTvaCriteriaComponent implements OnInit {
  public page1 = 1;
  public page2 = 1;
  public page3 = 1;
  constructor(private declatvacriteriaservice: DeclatvacriteriaService, private declarationtvaservice: DeclarationtvaService, private popupservice: PopupService ) { }

  ngOnInit(): void {
  }
  get declatvacriteria(): DeclarationTvaCriteria {
    return this.declatvacriteriaservice.declatvacriteria;
  }
  get listdeclarationtva(): Array<DeclarationTva> {
    return this.declatvacriteriaservice.listdeclarationtva;
  }
  get declarationtvavo2(): DeclarationTvaVo2 {
    return this.declatvacriteriaservice.declarationtvavo2;
  }
  public trouverdeclarationtva(){
    this.declatvacriteriaservice.trouverdeclarationtva();
  }
  public trvdetails(declarationtva: DeclarationTva){
    this.declatvacriteriaservice.trvdetails(declarationtva);
  }
  public delete1(index: number,facture: Facture) {
    this.declarationtvaservice.delete1(index,facture);
  }
  public popupupdate(facture: Facture){
    this.popupservice.a = false;
    this.popupservice.b = true;
    this.popupservice.popupupdate(facture);
  }
  public convertToXmlFile(declarationTva: DeclarationTva){
    this.declatvacriteriaservice.convertToXmlFile(declarationTva);
  }
  public trouverdeclarationtvaPourComptable(){
    this.declatvacriteriaservice.trouverdeclarationtvaPourComptable();
  }
  public deletedeclarationbyref(declarationtva: DeclarationTva, index:number) {
    this.declatvacriteriaservice.deletedeclarationbyref(declarationtva, index);
  }
}
