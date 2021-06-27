import {Component, OnInit} from '@angular/core';
import {Connection} from '../../controller/model/connection.model';
import {ConnectionService} from '../../controller/service/connection.service';
import {FirstcompComptableeService} from '../../controller/service/firstcomp-comptablee.service';
import {OperationSociete} from '../../controller/model/operation-societe.model';
import {OperationsocieteService} from '../../controller/service/operationsociete.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PaiementService} from '../../controller/service/paiement.service';
import {Paiement} from '../../controller/model/paiement.model';

@Component({
  selector: 'app-comptable-validateur',
  templateUrl: './comptable-validateur.component.html',
  styleUrls: ['./comptable-validateur.component.css']
})
export class ComptableValidateurComponent implements OnInit {
  closeModal: string;

  constructor(private firstcompcomptableService: FirstcompComptableeService, private modalService: NgbModal, private connectionService: ConnectionService, private operation: OperationsocieteService, private paiementService: PaiementService) {
  }

  ngOnInit(): void {

  }

  get connection3(): Connection {
    return this.connectionService.connection3;
  }

  get listoperationvalidateur(): Array<OperationSociete> {
    return this.connectionService.listoperationvalidateur;
  }

  public acceptcompte(operation: OperationSociete, index: number) {
    this.operation.acceptcompte(operation, index);
  }
  public refuscompte(operation: OperationSociete, index: number) {
    this.operation.refuscompte(operation, index);
  }
  get operationSociete(): OperationSociete {
    return this.operation.operationSociete;
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
      return `with: ${reason}`;
    }
  }
  public trouverPaiement(operat: OperationSociete) {
    this.paiementService.trouverPaiement(operat);
  }
  get paiementes(): Array<Paiement> {
    return this.paiementService.paiementes;
  }

}
