import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  
  constructor() { }
  today:Date=new Date(); 

  ngOnInit() {
  }

}
