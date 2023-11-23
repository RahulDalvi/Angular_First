import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chield',
  templateUrl: './chield.component.html',
  styleUrls: ['./chield.component.css']
})
export class ChieldComponent implements OnInit {

  constructor() { }
 @Input() value = 0;
 @Input() value1 = 0;

 @Output() getparantdataevent= new EventEmitter();
  ngOnInit(): void {
  }

}
