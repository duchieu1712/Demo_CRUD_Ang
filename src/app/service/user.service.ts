import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'Application/json'})
}
const apiUrl = 'http://localhost:8080';
@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private httpClient:HttpClient) { }
  getAll():Observable<User[]>{
    return this.httpClient.get<User[]>(`${apiUrl}/getUser`).pipe(
    )
  }

  createUser(user:any):Observable<any>{
    const headers = {'content-type': 'application/json'}
    const body=JSON.stringify(user)
    return this.httpClient.post(`${apiUrl}/createUser`, body,{'headers': headers})
  }

  updateUser(user:any):Observable<any>{
    const headers = {'content-type': 'application/json'}
    const body=JSON.stringify(user)
    return this.httpClient.put(`${apiUrl}/updateUser`, body, {'headers': headers})
  }

  deleteUser(id:number):Observable<any>{
    return this.httpClient.delete<number>(`${apiUrl}/deleteUser/${id}`)
  }

}
