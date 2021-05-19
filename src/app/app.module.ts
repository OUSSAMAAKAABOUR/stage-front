import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {FactureCreateComponent} from './view/facture-create/facture-create.component';
import {HttpClientModule} from '@angular/common/http';
import {FactureCriteriaComponent} from './view/facture-criteria/facture-criteria.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FactureListComponent} from './view/facture-list/facture-list.component';
import {ViewComponent} from './view/view.component';
import {FactureJournalComponent} from './view/facture-journal/facture-journal.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {DeclarationTvasaveComponent} from './view/declaration-tvasave/declaration-tvasave.component';
import {DecltvacriteriaComponent} from './view/decltvacriteria/decltvacriteria.component';
import {PopupFactureComponent} from './view/popup-facture/popup-facture.component';
import {TypeOperationSaveComponent} from './view/type-operation-save/type-operation-save.component';
import { CardTypeOperationComponent } from './view/card-type-operation/card-type-operation.component';
import { TypeOperationListComponent } from './view/type-operation-list/type-operation-list.component';


@NgModule({
  declarations: [
    AppComponent,
    FactureCreateComponent,
    FactureCriteriaComponent,
    FactureListComponent,
    FactureJournalComponent,
    DeclarationTvasaveComponent,
    DecltvacriteriaComponent,
    PopupFactureComponent,
    ViewComponent,
    TypeOperationSaveComponent,
    CardTypeOperationComponent,
    TypeOperationListComponent,




  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [ViewComponent],
  entryComponents: [PopupFactureComponent]
})
export class AppModule {
}
