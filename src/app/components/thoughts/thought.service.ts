import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Thought } from './thought';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {

  private readonly API = "http://localhost:3000/thoughts"

  constructor(private http: HttpClient) { }

  list() : Observable<Thought[]> {
    return this.http.get<Thought[]>(this.API)
  }

  getById(id: number) : Observable<Thought> {
    const URL = `${this.API}/${id}`

    return this.http.get<Thought>(URL)
  }

  create(thought: Thought) : Observable<Thought> {
    return this.http.post<Thought>(this.API, thought)
  }

  edit(thought: Thought) : Observable<Thought> {
    const url = `${this.API}/${thought.id}`

    return this.http.put<Thought>(url, thought)
  }

  delete(id: number) : Observable<Thought> {
    const URL = `${this.API}/${id}`

    return this.http.delete<Thought>(URL)
  }
}
