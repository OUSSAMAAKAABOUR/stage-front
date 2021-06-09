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
import { PopupEtapeComponent } from './view/popup-etape/popup-etape.component';
import {Routes, RouterModule} from '@angular/router';
import { LogincompComponent } from './view/logincomp/logincomp.component';
import { SecondcompComponent } from './view/secondcomp/secondcomp.component';
import { FacturechoicecompComponent } from './view/facturechoicecomp/facturechoicecomp.component';
import { DeclarationtvachoicecompComponent } from './view/declarationtvachoicecomp/declarationtvachoicecomp.component';
import { OperationsocietechoicecompComponent } from './view/operationsocietechoicecomp/operationsocietechoicecomp.component';
import {OperationCreateComponent} from './view/operation-create/operation-create.component';
import {PaiementSaveComponent} from './view/paiement-save/paiement-save.component';
import { FirstCompSocieteComponent } from './view/first-comp-societe/first-comp-societe.component';
import { ComptableSecondCompComponent } from './view/comptable-second-comp/comptable-second-comp.component';
import { PopupCreateComptableComponent } from './view/popup-create-comptable/popup-create-comptable.component';
import { PopupValidateOperationComponent } from './view/popup-validate-operation/popup-validate-operation.component';
import { AffecterComptableComponent } from './view/affecter-comptable/affecter-comptable.component';
import { ChoisirComptableComponent } from './view/choisir-comptable/choisir-comptable.component';
import { PremiercomComponent } from './view/premiercom/premiercom.component';
import { PaiementListComponent } from './view/paiement-list/paiement-list.component';

const appRoutes: Routes = [
  {path: '' , component: PremiercomComponent},
  {path: 'login' , component: LogincompComponent},
  {path: 'secondcomp' , component: SecondcompComponent},
  {
    path: 'facture' ,
    component: FacturechoicecompComponent,
    children: [
      {path: '', component: FactureCreateComponent},
      {path: 'facturecreate', component: FactureCreateComponent},
      {path: 'facturelist', component: FactureListComponent},
      {path: 'facturejournal', component: FactureJournalComponent},
      {path: 'facturecriteria', component: FactureCriteriaComponent},
    ]
  },
  {
    path: 'daclarationtva' ,
    component: DeclarationtvachoicecompComponent,
    children: [
      {path: '', component: DeclarationTvasaveComponent},
      {path: 'declsave', component: DeclarationTvasaveComponent},
      {path: 'declcriteria', component: DecltvacriteriaComponent},
    ]
  },
  {
    path: 'operationsociete' ,
    component: OperationsocietechoicecompComponent,
    children: [
      {path: '', component: CardTypeOperationComponent},
      {path: 'createoperation', component: CardTypeOperationComponent},
      {path: 'createtypeoperation', component: TypeOperationSaveComponent},
      {path: 'lISTtypeoperation', component: TypeOperationListComponent},
      {path: 'paiment-create', component: PaiementSaveComponent},
      {path: 'paiment-list', component: PaiementListComponent},

    ]
  },
  {path: 'firstSociete', component: FirstCompSocieteComponent},
  {path: 'newOperation2', component: CardTypeOperationComponent},
  {path: 'affectercomptable', component: AffecterComptableComponent},
];
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
    PopupEtapeComponent,
    LogincompComponent,
    SecondcompComponent,
    FacturechoicecompComponent,
    DeclarationtvachoicecompComponent,
    OperationsocietechoicecompComponent,
    CardTypeOperationComponent,
    OperationCreateComponent,
    PaiementSaveComponent,
    FirstCompSocieteComponent,
    ComptableSecondCompComponent,
    PopupCreateComptableComponent,
    PopupValidateOperationComponent,
    AffecterComptableComponent,
    ChoisirComptableComponent,
    PremiercomComponent,
    PaiementListComponent,




  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatDialogModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [ViewComponent],
  entryComponents: [PopupFactureComponent]
})
export class AppModule {
}
