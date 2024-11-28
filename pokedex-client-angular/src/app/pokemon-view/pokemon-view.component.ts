import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
	selector: 'app-pokemon-view',
	standalone: true,
	imports: [
		RouterLink
	],
	templateUrl: './pokemon-view.component.html',
	styleUrl: './pokemon-view.component.css'
})
export class PokemonViewComponent {
	pokemon: any;
	id: number;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		public pokemonService: PokemonService,
	) {
		let path = this.route.snapshot.url.pop();
		if (path) {
			this.id = parseInt(path.path);
		} else {
			this.id = 0;
		}
	}

	ngOnInit() {
		if (this.id > 0) {
			this.pokemonService.getPokemonById(this.id).subscribe(
				res => {
					if (res.status === 200) {
						let body: Object[] = res.body as [];
						if (body && body.length > 0) {
							this.pokemon = body[0];
						} else {
							this.id = 0;
						}
					}
				},
			);
		}
	}

	deletePokemon() {
		if (confirm("Are you sure you would like to delete this Pokemon?")) {
			this.pokemonService.deletPokemon(this.id).subscribe(
				res => {
					if (res.status === 200) {
						alert('Pokemon Deleted');
						this.router.navigate(['/pokemon']);
					}
				},
				err => {
					alert('Unable to Delete');
				}
			);
		}
	}
}
