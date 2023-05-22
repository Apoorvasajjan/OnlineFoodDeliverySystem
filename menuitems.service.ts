import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menuitems } from './menuitems';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuitemsService {

  constructor(private http:HttpClient) {}
  private url="http://localhost:8088/admin";

   /* public AddMenuItems(menuitems:Menuitems):Observable<object>{
      return this.http.post<any>("http://localhost:8088/admin/cartId",menuitems);
    }*/
    public getAllMenuItems():Observable<Menuitems[]>{
      return this.http.get<Menuitems[]>("http://localhost:8088/admin/");
    }
    public deleteMenuItem(item_id:number):Observable<any>
{
  return this.http.delete(`${this.url}/${item_id}`);
  alert("Deleted successfully");
}
public updateMenuItem(item_id:number,menuitems:Menuitems):Observable<any>
{
  return this.http.put(`${this.url}/${item_id}`,menuitems);
}
public addMenuItemsByAdmin(menuitems:Menuitems):Observable<object>{
  return this.http.post<any>("http://localhost:8088/admin/",menuitems);
}
public getItemByIdService(item_id:number):Observable<Menuitems>
{
  
  return this.http.get<Menuitems>(`${this.url}/${item_id}`);
}

   }