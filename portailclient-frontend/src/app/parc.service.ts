// parc.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Parc} from "./parc/parc.model";

@Injectable({
  providedIn: 'root'
})
export class ParcService {

  private apiUrl = 'http://localhost:8080/parcs';

  constructor(private http: HttpClient) { }

  getParcs(): Observable<Parc[]> {
    return this.http.get<Parc[]>(this.apiUrl);
  }

  getParc(id: string): Observable<Parc> {
    return this.http.get<Parc>(`${this.apiUrl}/${id}`);
  }

  createParc(parc: Parc): Observable<Parc> {
    return this.http.post<Parc>(this.apiUrl, parc);
  }

  updateParc(id: string | undefined, parc: Parc): Observable<Parc> {
    return this.http.put<Parc>(`${this.apiUrl}/${id}`, parc);
  }

  deleteParc(id: string | undefined): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
