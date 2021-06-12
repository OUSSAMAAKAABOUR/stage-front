import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FactureService} from '../../controller/service/facture.service';
import {Facture} from '../../controller/model/facture.model';
import {FactureVo} from '../../controller/model/facture-vo.model';
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';

@Component({
  selector: 'app-journal-admine',
  templateUrl: './journal-admine.component.html',
  styleUrls: ['./journal-admine.component.css']
})
export class JournalAdmineComponent implements OnInit {

  constructor(private factureService: FactureService) {
  }

  ngOnInit(): void {
  }

  get facturesJournal(): Array<Facture> {
    return this.factureService.facturesJournal;
  }

  get facturevo(): FactureVo {
    return this.factureService.facturevo;
  }

  public JournalAdmine() {
    this.factureService.JournalAdmine();
  }

  get facture(): Facture {
    return this.factureService.facture;
  }

  get Sommes(): FactureVo {
    return this.factureService.Sommes;
  }
  get etat2(): boolean {
    return this.factureService.etat2;
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
