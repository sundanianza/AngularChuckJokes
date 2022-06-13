import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jokes } from './jokes';

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  private baseUrl = "http://localhost:8080/";
  private baseUrl2 = "http://localhost:8080/complete";

  private baseUrl3 ="http://localhost:8080/onclick";


  constructor(private http: HttpClient) { }

  getAllJokesComplete(): Observable<Object[]>{

    return this.http.get<Object[]>(`${this.baseUrl2}`);

  }

  getAllJokes(): Observable<Jokes[]>{

    return this.http.get<Jokes[]>(`${this.baseUrl}`);
  }

  getAllJokesOnClick(): Observable<Jokes[]>{

    return this.http.get<Jokes[]>(`${this.baseUrl3}`);
  }
}
