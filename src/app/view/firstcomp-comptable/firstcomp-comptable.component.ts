import {Component, OnInit} from '@angular/core';
import {FirstcompComptableeService} from '../../controller/service/firstcomp-comptablee.service';
import {Router} from '@angular/router';
import {ConnectionService} from '../../controller/service/connection.service';
import {OperationSociete} from '../../controller/model/operation-societe.model';
import {Connection} from '../../controller/model/connection.model';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-firstcomp-comptable',
  templateUrl: './firstcomp-comptable.component.html',
  styleUrls: ['./firstcomp-comptable.component.css']
})
export class FirstcompComptableComponent implements OnInit {
  closeModal: string;

  constructor(private firstcompcomptableService: FirstcompComptableeService, private modalService: NgbModal, private route: Router, private connectionService: ConnectionService) {
  }

  ngOnInit(): void {
  }

  get listoperation(): Array<OperationSociete> {
    return this.connectionService.listoperation;
  }

  public findoperationforcomptable() {
    this.firstcompcomptableService.findoperationforcomptable();
  }

  public traiter(operationsociete: OperationSociete) {
    this.route.navigateByUrl('/comptablesecondcomp');
    this.firstcompcomptableService.traiter(operationsociete);
  }

  get connection3(): Connection {
    return this.connectionService.connection3;
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
}
