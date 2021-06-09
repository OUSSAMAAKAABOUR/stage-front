import {Component, OnInit} from '@angular/core';
import {PaiementService} from '../../controller/service/paiement.service';
import {Paiement} from '../../controller/model/paiement.model';
import {OperationsocieteService} from '../../controller/service/operationsociete.service';
import {OperationSociete} from '../../controller/model/operation-societe.model';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Test} from '../../controller/model/test.model';

@Component({
  selector: 'app-paiement-list',
  templateUrl: './paiement-list.component.html',
  styleUrls: ['./paiement-list.component.css']
})
export class PaiementListComponent implements OnInit {
  closeModal: string;

  constructor(private paiementService: PaiementService, private operationService: OperationsocieteService, private modalService: NgbModal) {
  }


  ngOnInit(): void {
    this.paiementService.findAll();
    this.operationService.findAll();


  }

  get paiements(): Array<Paiement> {
    return this.paiementService.paiements;
  }

  get paiementes(): Array<Paiement> {
    return this.paiementService.paiementes;
  }

  public delete(paiement: Paiement) {
    this.paiementService.delete(paiement);
  }

  get operationSocietes(): Array<OperationSociete> {
    return this.operationService.operationSocietes;
  }

  public trouverPaiement(operat: OperationSociete) {
    this.paiementService.trouverPaiement(operat);
  }

  triggerModal(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  get test(): Test {
    return this.operationService.test;
  }
  public findByRef() {
    this.operationService.findByRef();
  }
  get operationSociete1(): OperationSociete {
    return this.operationService.operationSociete1;
  }

}
