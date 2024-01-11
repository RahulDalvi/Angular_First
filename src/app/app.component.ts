import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'
import {FormGroup,FormControl} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularFirstProject';

  toget(){
    return 'name';
  }

  todo(name:string,name2:string){
    alert(name);
    alert(name2);
  }

  
  getdata(data:String){
    console.warn(data);
  }


  name='';
  name1='';
  getval(val:string){
    console.warn(val);
    this.name=val;
  }
  getval1(val:string){
    console.warn(val);
    this.name1=val;
  }


  count:any='';
  counter(input:string){
    input==='plus' ? this.count++:this.count--;
  }

  file='Rahul Dalvi';

  disable:any='';
  press(inputtext:string){
  inputtext==='true' ? this.disable=true : this.disable=false;
  }

  condition:any="Rahul";

  color:string="blue";

  weekday:string="Mon";

  user=['Rahul','Rohan','Ajay','Atul']

  userdetail=[
    {uname:'Rahul',phone:'789456'},
    {uname:'Rohan',phone:'789453'},
    {uname:'Ajay',phone:'789454'},
    {uname:'Atul',phone:'789455'}
  ]

  userdetails=[
    {uname:'Rahul',phone:'789456',account:['fb','insta']},
    {uname:'Rohan',phone:'789453',account:['fb','insta']},
    {uname:'Ajay',phone:'789454',account:['fb','insta']},
    {uname:'Atul',phone:'789455',account:['fb','insta']}
  ]

color1:string="";
bgcolor:string="";
getcolor(col:string,col2:string){
  this.color1=col;
  this.bgcolor=col2;
}

empdata:any="";
getuserdata(userdata:NgForm){
  this.empdata=userdata;
}

list:any[]=[];

gettask(task:string){

this.list.push({id:this.list.length, name:task});
console.warn(this.list);
}

removetask(id:any){
  console.warn(id);
  this.list=this.list.filter(task=>task.id!=id)

}

parantData:number=0;
parantData1:number=0;
updateChield(){
  this.parantData=Math.floor(Math.random()*100);
  this.parantData1=Math.floor(Math.random()*100);
}

userChildData=[
  {name:'rahul Dalvi',phone:'12345',city:'Mumbai'},
  {name:'rohan Dalvi',phone:'12345',city:'Mumbai'},
  {name:'rahul Dalvi',phone:'12345',city:'Mumbai'},
  {name:'rohan Dalvi',phone:'12345',city:'Mumbai'},
]

childvalue:any []=[];

getparantdata(pdata:any){
  console.warn(pdata);
  this.childvalue.push(pdata)

}

twowaybindingvalue:any;

date=Date();

pipedata={n:'rahul',p:10}

tdform(fd:NgForm){
  console.warn(fd)
}

reactformvalue = new FormGroup({
  username : new FormControl(''),
  password : new FormControl('')
})

reactForm(){
console.warn(this.reactformvalue.value);
}

}
