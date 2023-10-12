import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) 
  {

   }
   addUser(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/employees', data);
  }

  updateUser(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/employees/${id}`, data);
  }

  getUserList(): Observable<any> {
    return this._http.get('https://localhost:7144/api/user');
  }

  deleteUser(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/employees/${id}`);
  }
}
