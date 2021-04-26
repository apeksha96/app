import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  public url=`http://localhost:7000/registerData`;

  
  registerData(user : User){
   return this.http.post<any>(this.url,user)
  }
}
