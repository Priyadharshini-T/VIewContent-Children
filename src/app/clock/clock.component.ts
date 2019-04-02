import { Component, OnInit, AfterViewInit,ViewChild, ElementRef, ViewChildren,QueryList } from '@angular/core';
import { ChildComponent } from '../child/child.component';


@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit,AfterViewInit {
 
  @ViewChildren(ChildComponent) Value:QueryList<ChildComponent>; 

  constructor() {
    console.log(this.Value);
   }
   ngAfterViewInit(){  
    console.log(this.Value.toArray());
  }
  

  ngOnInit() {
  }

}
