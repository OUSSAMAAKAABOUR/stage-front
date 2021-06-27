import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Facture} from '../../controller/model/facture.model';
import {DeclarationTvaVo2} from '../../controller/model/declaration-tva-vo2.model';
import {PopupFactureComponent} from '../popup-facture/popup-facture.component';
import {DeclarationTva} from '../../controller/model/declaration-tva.model';
import {DeclarationtvaService} from '../../controller/service/declarationtva.service';
import {MatDialog} from '@angular/material/dialog';
import {PopupService} from '../../controller/service/popup.service';
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';
import {FactureService} from '../../controller/service/facture.service';
import {ConvertxmlfilePopupComponent} from "../convertxmlfile-popup/convertxmlfile-popup.component";

@Component({
  selector: 'app-declaration-tvasave',
  templateUrl: './declaration-tvasave.component.html',
  styleUrls: ['./declaration-tvasave.component.css']
})
export class DeclarationTvasaveComponent implements OnInit {

  public page = 1;
  public page2 = 1;
  public pageSize = 3;

  constructor(private declarationtvaservice: DeclarationtvaService, public dialog: MatDialog, private popupservice: PopupService, private factureService: FactureService) {
  }

  ngOnInit(): void {
  }
  openDialogXml(){
    this.dialog.open(ConvertxmlfilePopupComponent);
  }
  openDialog() {
    this.popupservice.facture = null;
    this.popupservice.b = false;
    this.popupservice.a = true;
    this.dialog.open(PopupFactureComponent);
  }

  get decltva(): DeclarationTva {
    return this.declarationtvaservice.decltva;
  }

  get a(): boolean {
    return this.declarationtvaservice.a;
  }

  get b(): boolean {
    return this.declarationtvaservice.b;
  }

  get c(): boolean {
    return this.declarationtvaservice.c;
  }

  public test() {
    this.facture.societeSource.ice = this.decltva.societe.ice;
    this.declarationtvaservice.test();
  }

  public trvfacuresandcalcultva() {
    this.declarationtvaservice.trvfacuresandcalcultva();
  }

  get declarationtvavo2(): DeclarationTvaVo2 {
    return this.declarationtvaservice.declarationtvavo2;
  }

  public save() {
    this.declarationtvaservice.save();
  }

  public delete1(index: number, facture: Facture) {
    this.declarationtvaservice.delete1(index, facture);
  }

  public popupupdate(facture: Facture) {
    this.popupservice.a = false;
    this.popupservice.b = true;
    this.popupservice.popupupdate(facture);
  }

  public savebrouillon() {
    this.declarationtvaservice.savebrouillon();
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

  get facture(): Facture {
    return this.factureService.facture;
  }
}
