import { Component, OnInit } from '@angular/core';
import {ConnectionService} from "../../controller/service/connection.service";
import {Connection} from "../../controller/model/connection.model";
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FactureService} from '../../controller/service/facture.service';

@Component({
  selector: 'app-comptable-second-comp',
  templateUrl: './comptable-second-comp.component.html',
  styleUrls: ['./comptable-second-comp.component.css']
})
export class ComptableSecondCompComponent implements OnInit {
  closeModal: string;

  constructor( private connectionService: ConnectionService, private modalService: NgbModal) { }

  ngOnInit(): void {
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
      return  `with: ${reason}`;
    }
  }
}
