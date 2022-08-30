import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First-Angular-app';
  name1:string="ganesh";
  name2:string="Praveen";
  marks1:number=23;
  marks2:number=26
  Sr1:number= 1;
  Sr2:number= 2;
  sr3(){
    return 3;
  }
  name3(){
    return "Rahil";
  }
  marks3(){
    return 34;
  }
 firstb(name:string){
  alert(name+" press first button");
 }
 Secondb(name:string){
  alert(name+" You press second button");
 }
 getdata(val:string){
  console.warn(val);
 }
  value='';
 getval(val:string){
   this.value=val;
 
  
  }
  show=false;
   users=['ganesh','rahil','pravin'];
   objus=[
    {name:'sham',email:'sham@g.com', mn:45},
    {name:'ram',email:'ram@g.com',mn:97}
   ]
   color="green";
   colors(){
    if(this.color==="green"){
    this.color="red";}
    else{
      this.color="green";
    }
   }
   userData:any={}
   getd(data:NgForm){
     console.log(data);
     this.userData=data;

   }
   list:any[]=[];
   addv(vaar:string){
      
      this.list.push({id:this.list.length,name:vaar});
      
   }
   delete(id:number){
      this.list=this.list.filter(vaar=>vaar.id!==id)
   }
   y=10
   randval(){
    this.y=Math.floor(Math.random()*12);
   }

   rearray:any[]=[
    {name:"ganesh",age:4,marks:32},
    {name:"praveen",age:43,marks:28},
    {name:"Rahil",age:44,marks:42}
  ]
}
