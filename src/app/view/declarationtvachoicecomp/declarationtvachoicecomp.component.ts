import { Component, OnInit } from '@angular/core';
import {TestserviceService} from "../../controller/service/testservice.service";

@Component({
  selector: 'app-declarationtvachoicecomp',
  templateUrl: './declarationtvachoicecomp.component.html',
  styleUrls: ['./declarationtvachoicecomp.component.css']
})
export class DeclarationtvachoicecompComponent implements OnInit {

  constructor(private testserviceService: TestserviceService) { }

  ngOnInit(): void {
  }
  get l(): boolean {
    return this.testserviceService.l;
  }
}
