import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Albums} from './albums'

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Albums[]>{
    return this.http.get<Albums[]>("https://jsonplaceholder.typicode.com/albums")
  }

  getAlbum(id:number):Observable<Albums>{
    return this.http.get<Albums>(`https://jsonplaceholder.typicode.com/albums/${id}`)
  }
}
