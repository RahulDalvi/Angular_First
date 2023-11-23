import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compwithboth',
  template: `
    <h2 class="shade">
      compwithboth works!
</h2>
  `,
  styles: [
    '.shade{color:pink}'
  ]
})
export class CompwithbothComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
