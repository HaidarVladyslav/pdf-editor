import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  fileName!: any;
  fileSize!: any;
  fileSubscription!: Subscription;

  isLocked: boolean = false;

  tools = [
    {value: 'compress-to-pdf', viewValue: 'Compress PDF'},
    {value: 'pdf-to-ppt', viewValue: 'PDF to PPT'},
    {value: 'pdf-to-jpg', viewValue: 'PDF to JPG'},
  ];

  loadOptions = [
    {value: 'save-to-device', viewValue: 'Save to device'},
    {value: 'save-to-small', viewValue: 'Save to Smalpdf'},
    {value: 'save-to-dropbox', viewValue: 'Save to Dropbox'},
    {value: 'save-to-google', viewValue: 'Save to Google Drive'},
  ]

  constructor(private pageService: PageService) { }

  ngOnInit(): void {
    this.getFileName();
  }

  getFileName() {
    this.fileSubscription = this.pageService.getDocumentData()
    .subscribe(data => {
      this.fileName = data[0].title;
      this.fileSize = data[0].size;
    });
  }

  toggleLock() {
    this.isLocked = !this.isLocked;
  }

  ngOnDestroy(): void {
    this.fileSubscription.unsubscribe();
  }
}
