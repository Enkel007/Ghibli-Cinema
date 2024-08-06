import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit{

  movie: any  = {};

  constructor(private movieService: MovieService, private acitvatedRoute: ActivatedRoute){
  }

  ngOnInit(): void {
    const id = this.acitvatedRoute.snapshot.paramMap.get('id');
    this.getMovieDetails(id!);  // ! => tells TypeScript to remove the error
  }

  getMovieDetails(id: string){
    this.movieService.getMovieDetails(id).subscribe(
      res => this.movie = res
    );
  }
}
