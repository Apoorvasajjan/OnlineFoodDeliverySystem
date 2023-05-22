import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  public adminSignup(user:User):Observable<any>{
    return this.http.post("http://localhost:8088/",user);
  
  }
  public signIn(user:User):Observable<any>{
    return this.http.post("http://localhost:8088/login",user);
  }
  public getAllUsers():Observable<any>{
    return this.http.get("http://localhost:8088/");
  }
  
}
