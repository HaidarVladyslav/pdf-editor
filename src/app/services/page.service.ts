import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Documents } from '../documents/db';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor() { }

  getDocumentData() {
    return of(Documents);
  }
}
