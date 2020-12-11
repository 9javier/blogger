import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { RoleService } from '../../../services/roleService';
import { DepartamentService } from '../../../services/departamentService';
import { LoginService } from '../../../services/loginService';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
export interface DialogData {
  
}


@Component({
  selector: 'app-modal-new-user',
  templateUrl: './modal-new-user.component.html',
  styleUrls: ['./modal-new-user.component.scss']
})

export class ModalNewUserComponent implements OnInit {
  public user: String="";
  public email: String="";
  public departament: String='';
  public rolUser:String='';
  public password: String='';

  selected = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  selectedRoles:Array<any> = [];
  selectedDept:Array<any> = [];
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    public dialogRef: MatDialogRef<ModalNewUserComponent>,
    public roleService:RoleService,
    public departamentService: DepartamentService,
    public loginService:LoginService,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }


  openSnackBar(msg:any) {
    this._snackBar.open(msg, 'Error', {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.getRoles();
    this.getDepartaments();
  }

   saveUser(){
    let User = {
      username: this.user,
      email: this.email,
      id_departament: this.departament,
      id_role: this.rolUser,
      password: this.password
    }
    this.createUser(User);
  }

  async createUser(user){

    await this.loginService.postNewUser(user).subscribe(res =>{
      if(res){
        this.dialogRef.close();
      }
    })
  }

  async getRoles(){
    await this.roleService.getAllRoles().subscribe(role =>{
      if(role){
        this.selectedRoles = role;
      }
    })
  }

  async getDepartaments(){
    await this.departamentService.getAllDepartaments().subscribe(departaments =>{
      if(departaments){
        this.selectedDept = departaments;
      }
    })
  }

  
  validateFormUser(){
    let msg ='';
    if(this.user == null || this.user == undefined || this.user.length <=0){
      msg ='Ingresa un nombre de Usuario!';
    }
    else if(this.email == null || this.email == undefined || this.email.length <=0){
      msg ='Ingresa un Email!';
    }
    else if(this.password == null || this.password == undefined ||  this.password.length <=0){
      msg ='Ingresa una contraseña!';
    }
    else if(this.rolUser == null || this.rolUser == undefined ||  this.rolUser.length <=0){
      msg ='Selecciona un rol!';
    }
    else if(this.departament == null || this.departament == undefined ||  this.departament.length <=0){
      msg ='Selecciona un departamento!';
    }
    if(msg.length >1){
      this.openSnackBar(msg)
    }else{
      this.saveUser();
    }
  }

}
