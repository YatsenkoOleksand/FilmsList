import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url = 'http://www.omdbapi.com/';
  apiKey = '725d76d3';
  type = 'movie';

  constructor(private http: HttpClient) { 

  }

  getListOfMovies(title: string): Observable<any>{

    return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${this.type}&apikey=${this.apiKey}`).pipe(
      map(results => results['Search'])
    );    
  }

  getDescription(id){
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
}
