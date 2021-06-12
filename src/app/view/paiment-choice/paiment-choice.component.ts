import { Component, OnInit } from '@angular/core';
import {PaiementService} from "../../controller/service/paiement.service";

@Component({
  selector: 'app-paiment-choice',
  templateUrl: './paiment-choice.component.html',
  styleUrls: ['./paiment-choice.component.css']
})
export class PaimentChoiceComponent implements OnInit {

  constructor(private paiementService: PaiementService) { }

  ngOnInit(): void {
  }
  public findpaiements2pourcomptable(){
    this.paiementService.findpaiements2pourcomptable();
  }
}
