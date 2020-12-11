import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blogService';
import { MenuRole }from '../../models/enums/menu.enum';
import { LoginService } from '../../services/loginService';
import { DepartamentService } from '../../services/departamentService';

@Component({
  selector: 'blogsComponent',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  public dataSource:Array<any> =[];
  public newBlogActive:Boolean = false;
  public id_dept:String ='';
  constructor(
    private blogService:BlogService,
    private loginService:LoginService,
    private departamentService: DepartamentService
  ) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }
 

   async getAllBlogsByDept(id_dept){
    await this.blogService.getAllBlogsByDept(id_dept).subscribe(resp =>{
       this.dataSource = resp;
     });
   }

   async getAllBlogs(){
    await this.blogService.getAllBlogs().subscribe(resp =>{
       this.dataSource = resp;
     });
   }
   

  refresh($event){
    this.getAllBlogsByDept(this.id_dept);
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
        const id_dept = resp.departament.id;
        if(role == MenuRole.ADMIN){
          this.newBlogActive = false;
        }else if(role == MenuRole.BLOGGER){
          this.newBlogActive = true;
        }
        if(id_dept != null && id_dept != undefined){
          this.id_dept = id_dept;
          this.checkUserIsDeptAdmin();
        }
        
      }
    })
  }

  async checkUserIsDeptAdmin(){
    await this.departamentService.getDeptById(this.id_dept).subscribe(res =>{
      console.log(res)
      if(res.type == 1){
        this.getAllBlogs();
      }else{
        this.getAllBlogsByDept(this.id_dept);
      }
    })
  }

}
