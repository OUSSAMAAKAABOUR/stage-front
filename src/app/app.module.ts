import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {FactureCreateComponent} from './view/facture-create/facture-create.component';
import {HttpClientModule} from '@angular/common/http';
import {FactureCriteriaComponent} from './view/facture-criteria/facture-criteria.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FactureListComponent} from './view/facture-list/facture-list.component';
import { ViewComponent } from './view/view.component';
import {FactureJournalComponent} from './view/facture-journal/facture-journal.component';



@NgModule({
  declarations: [
    AppComponent,
    FactureCreateComponent,
    FactureCriteriaComponent,
    FactureListComponent,
    FactureJournalComponent,
    ViewComponent


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [ViewComponent]
})
export class AppModule {
}
