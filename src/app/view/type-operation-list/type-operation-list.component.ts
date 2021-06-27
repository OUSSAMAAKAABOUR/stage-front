import {Component, OnInit} from '@angular/core';
import {ListTypeOperationService} from '../../controller/service/list-type-operation.service';
import {TypeOperation} from '../../controller/model/type-operation.model';
import {Etape} from '../../controller/model/etape.model';
import {TypeoperationService} from '../../controller/service/typeoperation.service';
import {PopupEtapeService} from '../../controller/service/popup-etape.service';
import {MatDialog} from '@angular/material/dialog';
import {EtapeTypeOperationsComponent} from '../etape-type-operations/etape-type-operations.component';

@Component({
  selector: 'app-type-operation-list',
  templateUrl: './type-operation-list.component.html',
  styleUrls: ['./type-operation-list.component.css']
})
export class TypeOperationListComponent implements OnInit {

  constructor(private listTypeOperationService: ListTypeOperationService, private popupEtapeService: PopupEtapeService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.listTypeOperationService.findAll();
  }

  get listtypeopeartion(): Array<TypeOperation> {
    return this.listTypeOperationService.listtypeopeartion;
  }

  get etapes(): Array<Etape> {
    return this.listTypeOperationService.etapes;
  }

  get b(): boolean {
    return this.listTypeOperationService.b;
  }

  get t(): string {
    return this.listTypeOperationService.t;
  }

  public trouveretapes(typeoperation: TypeOperation) {
    this.listTypeOperationService.trouveretapes(typeoperation);
    this.dialog.open(EtapeTypeOperationsComponent);
  }

  public delete2(index: number, libelle: string) {
    this.listTypeOperationService.delete2(index, libelle);
  }

  public delete3(index: number, libelle: string) {
    this.listTypeOperationService.delete3(index, libelle);
  }

  public popupupdate(etape: Etape) {
    this.popupEtapeService.a = false;
    this.popupEtapeService.b = true;
    this.popupEtapeService.popupupdate(etape);
  }
}
