import { Component, OnInit } from '@angular/core';
import {TestserviceService} from "../../controller/service/testservice.service";

@Component({
  selector: 'app-facturechoicecomp',
  templateUrl: './facturechoicecomp.component.html',
  styleUrls: ['./facturechoicecomp.component.css']
})
export class FacturechoicecompComponent implements OnInit {

  constructor(private testserviceService: TestserviceService) { }

  ngOnInit(): void {
  }
  get x(): boolean {
    return this.testserviceService.x;
  }
  get y(): boolean {
    return this.testserviceService.y;
  }
  get w(): boolean {
    return this.testserviceService.w;
  }
}
