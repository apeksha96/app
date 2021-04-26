import { Component } from '@angular/core';
import { RegisterService } from './register.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  paymethods=['Gpay','Debit','Credit'];
  methodHasError=true;
 
  userModel=new User("","","","",0,"","","","","","",true,"","","")
 
  constructor(private registerservice:RegisterService){}
 
  validateMethod(value: any){
    if(value==='default'){
      this.methodHasError=true;
    }else{
     this.methodHasError=false;
    }
  }
 
  onSubmit(){
    this.registerservice.registerData(this.userModel).subscribe(
      data =>console.log('success',data),
      error => console.log('Error!',error)
    )
  }
}
