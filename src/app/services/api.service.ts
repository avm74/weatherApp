import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getTiempo(place: string, days: number): Observable<any>{
    const options = {
      method: 'GET',
      params: {'q': place, 'days': days},
      headers: {
        'X-RapidAPI-Key': '3048b793c4msha3f54bdd1b02106p1090c7jsn2613df413f5b',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };
    return this.http.get(environment.uri, options);
  }

}
