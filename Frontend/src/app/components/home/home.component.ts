import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/loginService';
import { MenuAdminRole }  from '../../models/menu.roles.model';
import { MenuBloggerRole }  from '../../models/menu.roles.model';
import { MenuRole }from '../../models/enums/menu.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name:String ="";
  public departament: String  = "";
  public itemsMenu:Array<any> =[];
  public role: String;
  constructor(
    private loginService:LoginService
  ) { }

  ngOnInit(): void {
      this.getCurrentUser();
  }

  async getCurrentUser(){

    await this.loginService.getCurrentUser().subscribe(res =>{
      if(res){
        this.getUserById(res.currentUser);
      }
    })
  }

 async getUserById(user_id:String){
    await this.loginService.getUserById(user_id).subscribe( resp =>{
      if(resp){
        const role = resp.roles.type;
        const username = resp.user.username;
        const departament = resp.departament.name;
        this.name = username;
        this.departament = departament;

        if( role == MenuRole.ADMIN){
          this.itemsMenu = MenuAdminRole;
          this.role = "Admin"
        }else if(role == MenuRole.BLOGGER){
          this.itemsMenu = MenuBloggerRole;
          this.role = "Blogger";
        }
      }
    })
  }

}
