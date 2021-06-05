import { Component, OnInit } from '@angular/core';
import {TestserviceService} from "../../controller/service/testservice.service";
import {Comptable} from "../../controller/model/comptable.model";

@Component({
  selector: 'app-popup-create-comptable',
  templateUrl: './popup-create-comptable.component.html',
  styleUrls: ['./popup-create-comptable.component.css']
})
export class PopupCreateComptableComponent implements OnInit {

  constructor(private testService: TestserviceService) { }

  ngOnInit(): void {
  }
  get comptable(): Comptable {
    return this.testService.comptable;
  }
  public savecomptable(){
    this.testService.savecomptable();
  }
}
