import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compwithstyle',
  templateUrl: './compwithstyle.component.html',
  styles: [
    '.shade{color: green}'
  ]
})
export class CompwithstyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
