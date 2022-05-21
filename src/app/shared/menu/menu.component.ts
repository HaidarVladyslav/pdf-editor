import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  isDisabledRedUnd = true;

  selectedOption = 'rectangle';
  constructor() { }

  ngOnInit(): void {
  }

  changeSelection(ev: any) {
    console.log(ev);
    console.log(this.selectedOption);
  }

}
