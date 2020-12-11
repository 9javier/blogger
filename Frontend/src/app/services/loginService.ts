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
export class LoginService {

  private appBlog = environment.apiBase;
  private baseUrl: string;
  private postLoginUserUrl: string;
  private getCurreteUserUrl: string;
  private getUserByIdUrl: string;
  private getAllUsersUrl: string;
  private postNewUserUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiBase;
    this.postLoginUserUrl = `${this.baseUrl}/users/login`;
    this.getCurreteUserUrl = `${this.baseUrl}/whoAmI`;
    this.getUserByIdUrl = `${this.baseUrl}/api/user/`;
    this.getAllUsersUrl = `${this.baseUrl}/api/users`;
    this.postNewUserUrl = `${this.baseUrl}/signup`; 
  }


  postLogin(body):Observable<any>{
    return this.http.post<HttpRequestModel.Response>(this.postLoginUserUrl,body).pipe(
      map(resp => resp)
    )
  }

  getCurrentUser():Observable<any>{
    return this.http.get<any>(this.getCurreteUserUrl).pipe(
      map(resp => resp)
    )
  }

  getUserById(id:String):Observable<any>{
    return this.http.get<any>(this.getUserByIdUrl+`${id}`).pipe(
      map(resp => resp)
    )
  }

  getAllUser():Observable<any>{
    return this.http.get<any>(this.getAllUsersUrl).pipe(
      map(resp => resp)
    )
  }

  postNewUser(body):Observable<any>{
    return this.http.post<HttpRequestModel.Response>(this.postNewUserUrl,body).pipe(
      map(resp => resp)
    )
  }


}
