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
export class DepartamentService {

  private appBlog = environment.apiBase;
  private baseUrl: string;
  private getAllDepartamentUrl: string;
  private getDeptByIdUrl:string;


  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiBase;
    this.getAllDepartamentUrl = `${this.baseUrl}/api/departament`;
    this.getDeptByIdUrl = `${this.baseUrl}/api/departament/`;
  }

  getAllDepartaments():Observable<any>{
    return this.http.get<any>(this.getAllDepartamentUrl).pipe(
      map(resp => resp)
    )
  }

  getDeptById(id_dept:String):Observable<any>{
    return this.http.get<any>(this.getDeptByIdUrl+id_dept).pipe(
      map(resp => resp)
    )
  }



}
