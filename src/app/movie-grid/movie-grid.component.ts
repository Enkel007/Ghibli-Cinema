import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-grid',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './movie-grid.component.html',
  styleUrl: './movie-grid.component.css'
})
export class MovieGridComponent implements OnInit{
  movies: any[] = [];
  title: string = '';

  constructor(private movieService: MovieService){}

  //lifecycle hook
  ngOnInit(): void {
    this.title = 'Ghibli-Cinema';
    this.getMovies();
  }

  getMovies(){
    this.movieService.getMovies().subscribe(
      (res: any) => this.movies = res
    );
  }
}
