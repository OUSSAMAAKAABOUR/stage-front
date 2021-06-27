import {Injectable} from '@angular/core';
import {DeclarationTvaCriteria} from '../model/declaration-tva-criteria.model';
import {HttpClient} from '@angular/common/http';
import {DeclarationTva} from '../model/declaration-tva.model';
import {DeclarationTvaVo1} from '../model/declaration-tva-vo1.model';
import {DeclarationTvaVo2} from '../model/declaration-tva-vo2.model';
import {DeclarationtvaService} from './declarationtva.service';
import {ConnectionService} from './connection.service';

@Injectable({
  providedIn: 'root'
})
export class DeclatvacriteriaService {
  private _declatvacriteria: DeclarationTvaCriteria;
  private _listdeclarationtva: Array<DeclarationTva>;
  private _declarationtvavo2: DeclarationTvaVo2;
  private _declatvaedit: DeclarationTva;
  private _test = 0;
  private _UrlBaseDeclatva = 'http://localhost:8036/gestion-comptabilite/declarationtva';
  private _listdeclTvapourSociete: Array<DeclarationTva>;

  constructor(private http: HttpClient, private declarationtvaservice: DeclarationtvaService, private connectionService: ConnectionService) {
  }

  get listdeclTvapourSociete(): Array<DeclarationTva> {
    if (this._listdeclTvapourSociete == null) {
      this._listdeclTvapourSociete = new Array<DeclarationTva>();
    }
    return this._listdeclTvapourSociete;
  }

  set listdeclTvapourSociete(value: Array<DeclarationTva>) {
    this._listdeclTvapourSociete = value;
  }

  get test(): number {
    return this._test;
  }

  set test(value: number) {
    this._test = value;
  }

  get UrlBaseDeclatva(): string {
    return this._UrlBaseDeclatva;
  }

  set UrlBaseDeclatva(value: string) {
    this._UrlBaseDeclatva = value;
  }

  get declatvaedit(): DeclarationTva {
    if (this._declatvaedit == null) {
      this._declatvaedit = new DeclarationTva();
    }
    return this._declatvaedit;
  }

  set declatvaedit(value: DeclarationTva) {
    this._declatvaedit = value;
  }

  get declarationtvavo2(): DeclarationTvaVo2 {
    if (this._declarationtvavo2 == null) {
      this._declarationtvavo2 = new DeclarationTvaVo2();
    }
    return this._declarationtvavo2;
  }

  set declarationtvavo2(value: DeclarationTvaVo2) {
    this._declarationtvavo2 = value;
  }

  get listdeclarationtva(): Array<DeclarationTva> {
    if (this._listdeclarationtva == null) {
      this._listdeclarationtva = new Array<DeclarationTva>();
    }
    return this._listdeclarationtva;
  }

  set listdeclarationtva(value: Array<DeclarationTva>) {
    this._listdeclarationtva = value;
  }

  get declatvacriteria(): DeclarationTvaCriteria {
    if (this._declatvacriteria == null) {
      this._declatvacriteria = new DeclarationTvaCriteria();
    }
    return this._declatvacriteria;
  }

  set declatvacriteria(value: DeclarationTvaCriteria) {
    this._declatvacriteria = value;
  }

  public trouverdeclarationtva() {
    this.http.post<Array<DeclarationTva>>(this.UrlBaseDeclatva + '/criteria', this.declatvacriteria).subscribe(
      data => {
        this.listdeclarationtva = data;
        console.log('bravo trouver list declaration tva');
      }, error => {
        console.log('erreur trouver list declaration tva');
      }
    );
  }

  public trouverdeclarationtvaPourComptable() {
    //3mer refcomptable flobjet declatvacriteria 9bel matsifto
    this.http.post<Array<DeclarationTva>>(this.UrlBaseDeclatva + '/criteriapourcomptable', this.declatvacriteria).subscribe(
      data => {
        this.listdeclarationtva = data;
        console.log('bravo trouver list declaration tva pour Comptable');
      }, error => {
        console.log('erreur trouver list declaration tva pour Comptable');
      }
    );
  }

  public trvdetails(declarationtva: DeclarationTva) {
    this.declatvaedit = declarationtva;
    this.test = 1;
    let declarationtvavo1 = new DeclarationTvaVo1();
    declarationtvavo1.societeref = declarationtva.societe.ice;
    declarationtvavo1.typedeclarationtva = declarationtva.typeDeclarationTva.ref;
    declarationtvavo1.trim = declarationtva.trim;
    declarationtvavo1.annee = declarationtva.annee;
    declarationtvavo1.mois = declarationtva.mois;
    this.http.post<DeclarationTvaVo2>(this.UrlBaseDeclatva + '/findfacturesandcalcultva', declarationtvavo1).subscribe(
      data => {
        this.declarationtvavo2 = data;
        console.log('bravo trouver details declaration tva');
      }, error => {
        console.log('erreur trouver details declaration tva');
      }
    );
  }

  public refresh() {
    this.declarationtvaservice.trvfacuresandcalcultva();
    if (this.test == 1) {
      this.trvdetails(this.declatvaedit);
    }
  }

  public convertToXmlFile(declarationTva: DeclarationTva) {
    this.http.post(this.UrlBaseDeclatva + '/convertToXmlFile', declarationTva).subscribe(
      data => {
        console.log('bravo convert To Xml File');
        alert('Le fichier a été bien enregistrer dans telechargements');
      }, error => {
        console.log('error convert To Xml File');
      }
    );
  }

  //methode pour component decltvalistSociete
  public finddeclarationforsociete() {
    this.http.get<Array<DeclarationTva>>(this.UrlBaseDeclatva + '/societe/ice/' + this.connectionService.connection3.societeLogin.ice).subscribe(
      data => {
        console.log(this.connectionService.connection3.societeLogin.ice);

        this.listdeclTvapourSociete = data;
        console.log('bravo find declaration pour societe');
      }, error => {
        console.log('erreur find declaration pour societe');
      }
    );
  }
}
