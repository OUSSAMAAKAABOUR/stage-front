import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Facture} from '../../controller/model/facture.model';
import {FactureService} from '../../controller/service/facture.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FactureVo} from '../../controller/model/facture-vo.model';
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';


@Component({
  selector: 'app-facture-list',
  templateUrl: './facture-list.component.html',
  styleUrls: ['./facture-list.component.css']
})
export class FactureListComponent implements OnInit {
  closeModal: string;
  constructor(private factureService: FactureService, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.factureService.findAll();
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
  get facturevo(): FactureVo {
    return this.factureService.facturevo;
  }


  public CriteriaAdmine() {
    this.factureService.CriteriaAdmine();
  }
  title = 'htmltopdf';

  @ViewChild('pdfTable') pdfTable: ElementRef;

  public downloadAsPDF() {
    const doc = new jsPDF();

    const pdfTable = this.pdfTable.nativeElement;

    var html = htmlToPdfmake(pdfTable.innerHTML);

    const documentDefinition = {content: html};
    pdfMake.createPdf(documentDefinition).open();

  }


}
