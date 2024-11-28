import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-pokemon-edit',
	standalone: true,
	imports: [
		ReactiveFormsModule,
	],
	templateUrl: './pokemon-edit.component.html',
	styleUrl: './pokemon-edit.component.css'
})
export class PokemonEditComponent {
	pokemon: any;
	id: number;
	types: string[];

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private pokemonService: PokemonService,
	) {
		let path = this.route.snapshot.url.pop();
		if (path) {
			this.id = parseInt(path.path);
		} else {
			this.id = 0;
		}
		this.types = pokemonService.getPokemonTypes();
	}

	editForm = new FormGroup({
		id: new FormControl(),
		name: new FormControl('', Validators.required),
		height: new FormControl(0.00),
		weight: new FormControl(0.00),
		type1: new FormControl('', Validators.required),
		type2: new FormControl(''),
	});

	ngOnInit() {
		if (this.id > 0) {
			this.pokemonService.getPokemonById(this.id).subscribe(
				res => {
					if (res.status === 200) {
						let body: Object[] = res.body as [];
						if (body && body.length > 0) {
							this.pokemon = body[0];
							this.editForm.patchValue({
								id: this.pokemon.id,
								name: this.pokemon.name,
								height: this.pokemon.height,
								weight: this.pokemon.weight,
								type1: this.pokemon.type1,
								type2: this.pokemon.type2,
							});
						} else {
							this.id = 0;
						}
					}
				},
			);
		}
	}

	onSubmit() {
		this.pokemonService.putPokemon(this.editForm.value).subscribe(
			res => {
				if (res.status === 200) {
					alert('Pokemon Updated');
					this.router.navigate(['/pokemon/' + this.id]);
				}
			},
			err => {
				alert('Unable to Save');
			}
		)
	}
}
