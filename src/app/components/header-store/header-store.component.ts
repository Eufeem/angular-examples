import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-store',
  templateUrl: './header-store.component.html',
  styleUrls: ['./header-store.component.css']
})
export class HeaderStoreComponent implements OnInit {

  shop: String = "Las antenas dsa";

  constructor() { }

  ngOnInit(): void {
  }

}
