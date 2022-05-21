import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  documentData:any;
  documentDataSubsrtiption!: Subscription;

  constructor(private pageService: PageService) { }

  ngOnInit(): void {
    this.getPages();
  }

  getPages() {
    this.documentDataSubsrtiption = this.pageService.getDocumentData()
    .subscribe(data => this.documentData =  data);
  }

  ngOnDestroy(): void {
    this.documentDataSubsrtiption.unsubscribe();
  }
}
