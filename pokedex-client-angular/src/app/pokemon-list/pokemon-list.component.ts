import { Component } from '@angular/core';
import { Pokemon } from '../../../../models/pokemon';

@Component({
	selector: 'app-pokemon-list',
	standalone: true,
	imports: [],
	templateUrl: './pokemon-list.component.html',
	styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent {
	pokemon: Pokemon[];

	constructor() {
		this.pokemon = [];
	}
}
