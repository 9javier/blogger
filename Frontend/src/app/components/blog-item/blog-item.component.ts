import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from '../../services/blogService';

@Component({
  selector: 'BlogItemComponent',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {

  data ={ 
    author:"Javier",
    content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  }
  constructor(
    private blogService:BlogService
  ) { }

  @Input() author:String;
  @Input() content:String;
  @Input() datePost:String;

  ngOnInit(): void {
  }

  async getAllBlogs(){
   await this.blogService.getAllBlogs().subscribe(resp =>{
      console.log("blogs *******",resp)
    });
  }

}
