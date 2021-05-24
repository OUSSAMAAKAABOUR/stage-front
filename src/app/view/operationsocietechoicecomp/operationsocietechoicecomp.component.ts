import { Component, OnInit } from '@angular/core';
import {TestserviceService} from "../../controller/service/testservice.service";

@Component({
  selector: 'app-operationsocietechoicecomp',
  templateUrl: './operationsocietechoicecomp.component.html',
  styleUrls: ['./operationsocietechoicecomp.component.css']
})
export class OperationsocietechoicecompComponent implements OnInit {

  constructor(private testserviceService: TestserviceService) { }

  ngOnInit(): void {
  }
  get k(): boolean {
    return this.testserviceService.k;
  }
}
