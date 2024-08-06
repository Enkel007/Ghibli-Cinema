import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url: string = 'https://ghibliapi.vercel.app/films';

  // Design Pattern - Dependency Inject
  constructor(private http: HttpClient) { }

  getMovies(){
    return this.http.get(this.url);
  }

  getMovieDetails(id: string){
    return this.http.get(this.url + '/' + id);
  }
}
