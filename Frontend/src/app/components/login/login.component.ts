import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService } from '../../services/loginService';
import { DataService } from '../../services/dataService';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: String ="";
  public password: String="";
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor( 
    private router:Router,
    private loginService:LoginService,
    private dataService:DataService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {

  }

  openSnackBar(msg:any) {
    this._snackBar.open(msg, 'Error', {
      duration: 1500,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

 async goHome(){
   
    let data = {email: this.user,password: this.password};
    await this.loginService.postLogin(data).subscribe(res =>{
       if(res && res.token){
         this.dataService.logueado = true;
         const token = res.token;
         localStorage.setItem('token',token);
         this.router.navigate(['home']); 
       }else{
         this.openSnackBar('Usuario o Email incorrectos!')
       }
       
     },(err)=>{
      this.openSnackBar('Usuario o Email incorrectos!');
     })
   
  
     
  }

  validateLogin(){
    let msg ='';
    if(this.user == null || this.user == undefined || this.user.length <=0){
      msg ='Ingresa un Email!';
    }
    else if(this.password == null || this.password == undefined ||  this.password.length <=0){
      msg ='Ingresa una password!';
    }
    if(msg.length >1){
      this.openSnackBar(msg)
    }else{
      this.goHome();
    }
  

  }

}
