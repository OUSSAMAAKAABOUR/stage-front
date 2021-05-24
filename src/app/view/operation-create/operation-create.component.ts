import {Component, OnInit} from '@angular/core';
import {Facture} from '../../controller/model/facture.model';
import {OperationsocieteService} from '../../controller/service/operationsociete.service';
import {OperationSociete} from '../../controller/model/operation-societe.model';
import {Etape} from '../../controller/model/etape.model';

@Component({
  selector: 'app-operation-create',
  templateUrl: './operation-create.component.html',
  styleUrls: ['./operation-create.component.css']
})
export class OperationCreateComponent implements OnInit {

  constructor(private operatioSocieteService: OperationsocieteService) {
  }

  ngOnInit(): void {
  }

  get operationSociete(): OperationSociete {
    return this.operatioSocieteService.operationSociete;
  }

  public save() {
    this.operatioSocieteService.save();
  }

  get etapes(): Array<Etape> {
    return this.operatioSocieteService.etapes;
  }

  public trouveretapes() {
    this.operatioSocieteService.trouveretapes();
  }
  get etat1(): boolean {
    return this.operatioSocieteService.etat1;
  }

}
