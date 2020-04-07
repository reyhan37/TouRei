import { Component, OnInit } from '@angular/core';
import { BuiltinType } from '@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  menuOpen = false;
  public open = false;
  public change = false;
  onClick() {
    if(!this.menuOpen) {
      this.open = true;
      this.change = true
      this.menuOpen = true;
      console.log('menu open');
    } else {
      this.open = false;
      this.change = false;
      this.menuOpen = false;
      console.log('menu close');
    }
  }
}