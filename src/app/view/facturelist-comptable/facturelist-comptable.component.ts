import { Component, OnInit } from '@angular/core';
import {FactureService} from "../../controller/service/facture.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Facture} from "../../controller/model/facture.model";

@Component({
  selector: 'app-facturelist-comptable',
  templateUrl: './facturelist-comptable.component.html',
  styleUrls: ['./facturelist-comptable.component.css']
})
export class FacturelistComptableComponent implements OnInit {
  closeModal: string;
  constructor(private factureService: FactureService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  get factures(): Array<Facture> {
    return this.factureService.factures;
  }

  public delete(facture: Facture) {
    this.factureService.delete(facture);
  }

  public updateFront(index: number, facture: Facture) {
    this.factureService.updateFront(index, facture);

  }

  get facture(): Facture {
    return this.factureService.facture;
  }
  get etat(): boolean {
    return this.factureService.etat;
  }
  public updatBackend() {
    this.factureService.updatBackend();
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
