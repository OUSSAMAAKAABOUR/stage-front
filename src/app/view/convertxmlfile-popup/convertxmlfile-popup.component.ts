import { Component, OnInit } from '@angular/core';
import {DeclarationtvaService} from "../../controller/service/declarationtva.service";
import {EmplacementXml} from "../../controller/model/emplacement-xml.model";

@Component({
  selector: 'app-convertxmlfile-popup',
  templateUrl: './convertxmlfile-popup.component.html',
  styleUrls: ['./convertxmlfile-popup.component.css']
})
export class ConvertxmlfilePopupComponent implements OnInit {

  constructor(private declarationtvasaveService: DeclarationtvaService) { }

  ngOnInit(): void {
  }
  get emplacementXml(): EmplacementXml {
    return this.declarationtvasaveService.emplacementXml;
  }
  public convertxmlstring(){
    this.declarationtvasaveService.convertxmlstring();
  }
  public convertxmlstring2(){
    this.declarationtvasaveService.convertxmlstring2();
  }
}
