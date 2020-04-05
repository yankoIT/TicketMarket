import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMovie } from '../shared/interfaces/movie';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: IMovie[];
  selectedMovie: IMovie;
  genres: string[];

  constructor(private http: HttpClient) {
    this.genres = [
      'Action',
      'Drama',
      'Romance',
      'Adventure',
      'Crime', 'Comedy', 
      'Horror', 'Musical', 
      'Historical', 
      'Science Fiction', 
      'War', 
      'Westerns'
    ];
  }

  create(movie: IMovie) {
    const url = `appdata/${environment.appKey}/movies`;
    return this.http.post(url, movie );
  }

  loadMovie(id?: number) {
    const url = `appdata/${environment.appKey}/movies${id ? `/${id}` : ''}`;
    return this.http.get<IMovie[] | IMovie>(url);
  }

  updateMovie(id: number, movie: IMovie){
    const url = `appdata/${environment.appKey}/movies/${id}`;
    return this.http.put(url, movie);
  }

  deleteMovie(id: string) {
    const url = `appdata/${environment.appKey}/movies/${id}`;
    return this.http.delete<IMovie>(url);
  }
}