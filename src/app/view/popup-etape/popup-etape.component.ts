import { Component, OnInit } from '@angular/core';
import {Etape} from "../../controller/model/etape.model";
import {PopupEtapeService} from "../../controller/service/popup-etape.service";

@Component({
  selector: 'app-popup-etape',
  templateUrl: './popup-etape.component.html',
  styleUrls: ['./popup-etape.component.css']
})
export class PopupEtapeComponent implements OnInit {

  constructor(private popupEtapeService: PopupEtapeService) { }

  ngOnInit(): void {
  }
  get etape(): Etape {
    return this.popupEtapeService.etape;
  }
  get a(): boolean {
    return this.popupEtapeService.a;
  }
  get b(): boolean {
    return this.popupEtapeService.b;
  }
  public save(){
    this.popupEtapeService.save();
  }
  public update(){
    this.popupEtapeService.update();
  }
  public refresh(){
    this.popupEtapeService.refresh();
  }

}
