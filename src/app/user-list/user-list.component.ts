import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() item = 0;
  count=0
  counter(type:string){
      if(type==='add'){
        this.count++;
      }
      else{
        this.count--;
      }
  }
}
