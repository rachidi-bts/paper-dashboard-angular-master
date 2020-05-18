import { Injectable } from '@angular/core';
import {DemandeDocument} from '../model/demande-document.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemandeDocumentService {

  private _demandedocument: DemandeDocument;
  private _demandedocumentsearch: DemandeDocument;
  private _demandedocuments: Array<DemandeDocument>;

  private _url = 'http://localhost:8090/GD/DemmandeDocument';
  constructor(private http: HttpClient) {
  }

  public save() {
    this.http.post<number>(this._url, this.demandedocument).subscribe(
      data => {
        if (data > 0) {
          this.demandedocuments.push(this.cloneDemandeDocument(this.demandedocument));
          this.demandedocument = null;
        }
      }, error => {
        console.log('error');
      }
    );
  }

  public deleteFromList(demandedocument: DemandeDocument) {
    const index = this.demandedocuments.findIndex(d => d.id === demandedocument.id);
    if (index !== -1) {
      this.demandedocuments.splice(index, 1);
    }
  }

  public deleteById(demandedocument: DemandeDocument) {
    this.http.delete<number>(this._url + '/' + demandedocument.id).subscribe(
      data => {
        console.log(data);
        this.deleteFromList(demandedocument);
      }
    );
  }


  get demandedocument(): DemandeDocument {
    if (this._demandedocument == null) {
      this._demandedocument = new DemandeDocument();
    }
    return this._demandedocument;
  }

  set demandedocument(value: DemandeDocument) {
    this._demandedocument = value;
  }

  get demandedocuments(): Array<DemandeDocument> {
    if (this._demandedocuments == null) {
      this._demandedocuments = new Array<DemandeDocument>();
    }
    return this._demandedocuments;
  }

  set demandedocuments(value: Array<DemandeDocument>) {
    this._demandedocuments = value;
  }

  get demandedocumentsearch(): DemandeDocument {
    if (this._demandedocumentsearch == null) {
      this._demandedocumentsearch = new DemandeDocument();
    }
    return this._demandedocumentsearch;
  }

  set demandedocumentsearch(value: DemandeDocument) {
    this._demandedocumentsearch = value;
  }

  private cloneDemandeDocument(demandedocument: DemandeDocument) {
    const myClone = new DemandeDocument();
    myClone.id = demandedocument.id;
    myClone.dateDemmande = demandedocument.dateDemmande;
    myClone.dateValidation = demandedocument.dateValidation;
    myClone.demmandeur = demandedocument.demmandeur;
    myClone.typeDocument = demandedocument.typeDocument;
    return myClone;
  }


  public findAll() {
    this.http.get<Array<DemandeDocument>>(this._url + '/').subscribe(
      data => {
        this.demandedocuments = data;
      }
    );
  }


}
