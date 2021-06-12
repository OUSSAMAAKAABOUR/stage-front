import {Component, OnInit} from '@angular/core';
import {OperationsocieteService} from '../../controller/service/operationsociete.service';
import {OperationSociete} from '../../controller/model/operation-societe.model';
import {Connection} from '../../controller/model/connection.model';
import {Societe} from '../../controller/model/societe.model';
import {ConnectionService} from '../../controller/service/connection.service';
import {PaiementService} from '../../controller/service/paiement.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Paiement} from '../../controller/model/paiement.model';

@Component({
  selector: 'app-first-comp-societe',
  templateUrl: './first-comp-societe.component.html',
  styleUrls: ['./first-comp-societe.component.css']
})
export class FirstCompSocieteComponent implements OnInit {
  closeModal: string;
  constructor(private operatioSocieteService: OperationsocieteService, private connectionService: ConnectionService,private modalService: NgbModal, private operationService: OperationsocieteService,private paiementService: PaiementService,) {
  }

  ngOnInit(): void {
    this.paiementService.findAll();
    this.operationService.findAll();

  }

  get operationsse(): Array<OperationSociete> {
    return this.connectionService.operationsse;
  }




    get con(): Connection {
    return this.operatioSocieteService.con;
  }

  get operations(): Array<OperationSociete> {
    return this.operatioSocieteService.operations;
  }

  get societe(): Societe {
    return this.operatioSocieteService.societe;
  }

  public save2() {
    this.operatioSocieteService.save2();
  }

  get connection3(): Connection {
    return this.connectionService.connection3;
  }

  public getLogin() {
    this.connectionService.getLogin();
  }

  get etat(): boolean {
    return this.connectionService.etat;
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
  get paiementes(): Array<Paiement> {
    return this.paiementService.paiementes;
  }


}
