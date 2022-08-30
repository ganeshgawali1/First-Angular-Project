import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-reuse-component',
  templateUrl: './reuse-component.component.html',
  styleUrls: ['./reuse-component.component.css']
})
export class ReuseComponentComponent implements OnInit {

  constructor() { }

  @Input() yy:{name:string,age:number,marks:number}={name:'',age:0,marks:0};

  ngOnInit(): void {
  }

  
}
