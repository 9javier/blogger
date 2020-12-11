import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import { LoginService } from '../../services/loginService';
import { ModalNewUserComponent } from './modal-new-user/modal-new-user.component';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'usersComponent',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {

  public displayedColumns: string[] = ['position','name','email'];

  public dataSource;
  
  constructor(
    private loginService:LoginService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllUsers()
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  async getAllUsers(){
    await this.loginService.getAllUser().subscribe(user =>{
      if(user){
        let data:any = []
        user.map( (element,index) =>{
          data.push({position: (index+1),...element})
        })
        this.dataSource =  new MatTableDataSource(data);
      }
    })
  }
  
  async openDialog() {
    const dialogRef = await this.dialog.open(ModalNewUserComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      this.refresh();
    });
  }

  refresh(){
    this.getAllUsers();
  }


}

