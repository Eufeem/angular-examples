import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-input',
  templateUrl: './data-input.component.html',
  styleUrls: ['./data-input.component.css']
})
export class DataInputComponent implements OnInit {

  @Input() json: any;

  constructor() { }

  ngOnInit(): void {
  }

}
