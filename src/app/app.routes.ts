import { Routes } from '@angular/router';
import { MovieGridComponent } from './movie-grid/movie-grid.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { ErrorPageComponent } from './error-page/error-page.component';

export const routes: Routes = [
    {path: '', redirectTo: '/movies', pathMatch: 'full'},
    {path: 'movies', component: MovieGridComponent},
    {path: 'movies/:id', component: MovieDetailsComponent}, // /: => mundeson route me komponent dinamik
    {path: '**', component: ErrorPageComponent} //PATH ERROR PAGE DUHET TE JETE I FUNDIT
];
