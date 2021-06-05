import { Component, OnInit } from '@angular/core';
import {AffecterComptableService} from "../../controller/service/affecter-comptable.service";
import {Comptable} from "../../controller/model/comptable.model";

@Component({
  selector: 'app-choisir-comptable',
  templateUrl: './choisir-comptable.component.html',
  styleUrls: ['./choisir-comptable.component.css']
})
export class ChoisirComptableComponent implements OnInit {

  constructor(private affecterComptableService: AffecterComptableService) { }
  page = 1 ;
  pageSize = 1;
  ngOnInit(): void {
    this.affecterComptableService.findAllComptable();
  }
  public affecterComptableTraiteur(comptable: Comptable){
    this.affecterComptableService.affecterComptableTraiteur(comptable);
  }
  public affecterComptableValidateur(comptable: Comptable){
    this.affecterComptableService.affecterComptableValidateur(comptable);
  }
  get listeComptable(): Array<Comptable> {
    return this.affecterComptableService.listeComptable;
  }
  get a(): boolean {
    return this.affecterComptableService.a;
  }
}
