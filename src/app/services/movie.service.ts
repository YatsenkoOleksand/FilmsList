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

  //GET HTTP method to get the JSON responce with the movies sorted by the name using my private Key
  getListOfMovies(title: string): Observable<any>{

    return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${this.type}&apikey=${this.apiKey}`).pipe(
      map(results => results['Search'])
    );    
  }

  //GET HTTP method to get the description of the selected movie
  getDescription(id){
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
}
