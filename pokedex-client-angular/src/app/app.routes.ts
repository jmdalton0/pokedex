import { Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { HomeComponent } from './home/home.component';
import { PokemonViewComponent } from './pokemon-view/pokemon-view.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'pokemon', component: PokemonListComponent },
    { path: 'pokemon/:id', component: PokemonViewComponent },
];
