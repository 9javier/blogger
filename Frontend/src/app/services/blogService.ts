import { Injectable } from '@angular/core';
import {from, Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map, filter, switchMap} from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from "rxjs";
import { HttpRequestModel } from '../models/endpoints/HttpRequest';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private appBlog = environment.apiBase;
  private baseUrl: string;
  private getAllBlogsUrl: string;
  private postNewBlogUrl: string;
  private getAllBlogsByDeptUrl: string;


  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiBase;
    this.getAllBlogsUrl = `${this.baseUrl}/api/blog`;
    this.postNewBlogUrl = `${this.baseUrl}/api/blog`;
    this.getAllBlogsByDeptUrl = `${this.baseUrl}/api/blog/dept/`;

  }

  getAllBlogs():Observable<any>{
    return this.http.get<any>(this.getAllBlogsUrl).pipe(
      map(resp => resp)
    )
  }

  postLogin(body):Observable<any>{
    return this.http.post<HttpRequestModel.Response>(this.postNewBlogUrl,body).pipe(
      map(resp => resp)
    )
  }

  getAllBlogsByDept(id_departament):Observable<any>{
    return this.http.get<any>(this.getAllBlogsByDeptUrl+id_departament).pipe(
      map(resp => resp)
    )
  }

}
