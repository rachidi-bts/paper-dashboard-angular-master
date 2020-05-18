import { Component, OnInit } from '@angular/core';
import {DemandeDocument} from '../../controller/model/demande-document.model';
import {DemandeDocumentService} from '../../controller/service/demande-document.service';

@Component({
  // tslint:disable-next-line:component-selector
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit {
  constructor(private demandedocumentService: DemandeDocumentService) { }

  ngOnInit(): void {
  }
  public save() {
    this.demandedocumentService.save();
  }

  get demandedocument(): DemandeDocument {
    return this.demandedocumentService.demandedocument;
  }
}


