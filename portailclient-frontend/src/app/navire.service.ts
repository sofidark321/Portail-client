import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Navire} from "./navire/navire.model";

@Injectable({
  providedIn: 'root'
})
export class NavireService {

  private apiUrl = 'http://localhost:8080/navires';

  constructor(private http: HttpClient) { }

  getNavires(): Observable<Navire[]> {
    return this.http.get<Navire[]>(this.apiUrl);
  }

  getNavire(id: string): Observable<Navire> {
    return this.http.get<Navire>(`${this.apiUrl}/${id}`);
  }

  createNavire(navire: Navire): Observable<Navire> {
    return this.http.post<Navire>(`${this.apiUrl}/create`, navire);
  }

  updateNavire(id: string | undefined, navire: Navire): Observable<Navire> {
    return this.http.put<Navire>(`${this.apiUrl}/${id}`, navire);
  }

  deleteNavire(id: string | undefined): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
