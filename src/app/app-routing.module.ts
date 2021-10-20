import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesComponent } from './components/movies/movies.component';
import {VideoPlayerComponent} from "./components/video-player/video-player.component";

const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'movie', component: MovieComponent },
  {path: 'moviedetail', component:VideoPlayerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
