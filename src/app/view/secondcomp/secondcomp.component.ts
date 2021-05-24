import { Component, OnInit } from '@angular/core';
import {TestserviceService} from "../../controller/service/testservice.service";

@Component({
  selector: 'app-secondcomp',
  templateUrl: './secondcomp.component.html',
  styleUrls: ['./secondcomp.component.css']
})
export class SecondcompComponent implements OnInit {

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
  public methode2second1facturechoice(){
    this.testserviceService.methode2second1facturechoice();
  }
  public methode2second1operationchoice() {
    this.testserviceService.methode2second1operationchoice();
  }
  public methode2second1declarationchoice(){
    this.testserviceService.methode2second1declarationchoice();
  }
}
