import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [],
	templateUrl: './home.component.html',
	styleUrl: './home.component.css'
})
export class HomeComponent {

	constructor(public pokemonService: PokemonService) { }

}
