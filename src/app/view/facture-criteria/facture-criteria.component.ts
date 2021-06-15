import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FactureVo} from '../../controller/model/facture-vo.model';
import {FactureService} from '../../controller/service/facture.service';
import {Facture} from '../../controller/model/facture.model';

import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';
import {Connection} from '../../controller/model/connection.model';
import {OperationsocieteService} from '../../controller/service/operationsociete.service';
import {ConnectionService} from '../../controller/service/connection.service';

@Component({
  selector: 'app-facture-criteria',
  templateUrl: './facture-criteria.component.html',
  styleUrls: ['./facture-criteria.component.css']
})
export class FactureCriteriaComponent implements OnInit {

  constructor( private connectionService: ConnectionService, private factureService: FactureService) {
  }

  ngOnInit(): void {
  }

  get facturevo(): FactureVo {
    return this.factureService.facturevo;
  }

  get facturescriteria(): Array<Facture> {
    return this.factureService.facturescriteria;
  }

  public Criteria() {
    this.factureService.Criteria();
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
  get connection3(): Connection {
    return this.connectionService.connection3;
  }


}
