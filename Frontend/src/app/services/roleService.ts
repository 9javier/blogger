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
export class RoleService {

  private appBlog = environment.apiBase;
  private baseUrl: string;
  private getAllRolesUrl: string;


  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiBase;
    this.getAllRolesUrl = `${this.baseUrl}/api/roles`;

  }

  getAllRoles():Observable<any>{
    return this.http.get<any>(this.getAllRolesUrl).pipe(
      map(resp => resp)
    )
  }



}
