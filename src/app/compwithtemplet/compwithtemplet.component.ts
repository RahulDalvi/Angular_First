import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compwithtemplet',
  template: `
    <h2 class="shade">
      compwithtemplet works!
</h2>
  `,
  styleUrls: ['./compwithtemplet.component.css']
})
export class CompwithtempletComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
