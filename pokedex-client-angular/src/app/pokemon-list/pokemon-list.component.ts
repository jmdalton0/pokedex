import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-pokemon-list',
	standalone: true,
	imports: [
		RouterLink,
	],
	templateUrl: './pokemon-list.component.html',
	styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent {
	allPokemon: any;

	constructor(public pokemonService: PokemonService) { }

	ngOnInit() {
		this.pokemonService.getPokemon().subscribe(
			res => { this.allPokemon = res },
		);
	}
}
