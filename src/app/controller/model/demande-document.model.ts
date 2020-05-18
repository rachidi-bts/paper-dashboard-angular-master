import {Demmandeur} from './demmandeur.model';
import {TypeDocument} from './type-document.model';

export class DemandeDocument {
  public id: number;
  public dateDemmande: string ;
  public dateValidation: string;
  public demmandeur: Demmandeur;
  public typeDocument: TypeDocument;

}
