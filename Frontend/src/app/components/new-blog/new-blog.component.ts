import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BlogService } from '../../services/blogService';
import { LoginService } from '../../services/loginService';
import { BlogModel } from '../../models/endpoints/BlogModel';


@Component({
  selector: 'NewBlogComponent',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.scss']
})
export class NewBlogComponent implements OnInit {
  
  
  public currentUser_:any={};
  public contentText: String ='';
  @Output() blog: EventEmitter<any> = new EventEmitter();
  

  constructor(
    private blogService: BlogService,
    private loginService:LoginService
  ) { }

   ngOnInit() {
    this.getCurrentUser();
  }

  async  saveBlog(){
    if(this.contentText == null || this.contentText == undefined || this.contentText.length <= 0 ){

    }else{
      const blog ={
        author:this.currentUser_.user.username,
        content: this.contentText,
        date:new Date(),
        id_user: this.currentUser_.user.id,
        id_departament: this.currentUser_.departament.id
        };
        
        await this.blogService.postLogin(blog).subscribe(resp => {
          console.log(resp)
          this.refresh();
        })
    }
   
  }
  async getCurrentUser(){
  
     await this.loginService.getCurrentUser().subscribe(res =>{
      if(res){
        const user_id = res.currentUser;
         this.loginService.getUserById(user_id).subscribe( user =>{
          this.currentUser_ = user;
          return user;
        });
      }
    });

  }

  refresh(){
    this.contentText ="";
    this.blog.emit(true);
  }

  async getUserById(user_id:String){
  await this.loginService.getUserById(user_id).subscribe( user =>{
    this.currentUser_ = user;
    console.log(this.currentUser_);
    return user;
  });
}

}
