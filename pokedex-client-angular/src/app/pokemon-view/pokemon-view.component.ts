import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-pokemon-view',
	standalone: true,
	imports: [],
	templateUrl: './pokemon-view.component.html',
	styleUrl: './pokemon-view.component.css'
})
export class PokemonViewComponent {
	pokemon: any;

	constructor(private route: ActivatedRoute, public pokemonService: PokemonService) { }

	ngOnInit() {
		let path = this.route.snapshot.url.pop();
		if (path) {
			let id = parseInt(path.path);
			this.pokemonService.getPokemonById(id).subscribe(
				res => { this.pokemon = res },
			);
		}
	}
}
