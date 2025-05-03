import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import{ FormsModule, NgForm} from '@angular/forms'
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../user';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 changeMode:boolean=false;
 authService:AuthenticationService=inject(AuthenticationService)
 forsubmit(form:NgForm){
   let email:string=form.value.email

   let password:string=form.value.password
   if(!this.changeMode){

     this.authService.signUp(email,password).subscribe({
       next:(res)=>{
         console.log(res);
         
       }
      
       
     })  
   }
   else{
    this.authService.logIn(email,password).subscribe(
      {
        error:(err)=>{
          console.log(err);
          
        }
          
          
        
      }
    )
   }

 }
 changelogins(){
this.changeMode=!this.changeMode
 }

}
