import { Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { HomeComponent } from './home/home.component';
import { PokemonViewComponent } from './pokemon-view/pokemon-view.component';
import { PokemonCreateComponent } from './pokemon-create/pokemon-create.component';
import { PokemonEditComponent } from './pokemon-edit/pokemon-edit.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'pokemon', component: PokemonListComponent },
    { path: 'pokemon/:id', component: PokemonViewComponent },
    { path: 'add-pokemon', component: PokemonCreateComponent },
    { path: 'edit-pokemon/:id', component: PokemonEditComponent },
];
