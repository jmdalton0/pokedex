import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PokemonService } from '../services/pokemon.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-pokemon-create',
	standalone: true,
	imports: [
		ReactiveFormsModule,
	],
	templateUrl: './pokemon-create.component.html',
	styleUrl: './pokemon-create.component.css'
})
export class PokemonCreateComponent {
	types: string[];

	constructor(
		private router: Router,
		private pokemonService: PokemonService
	) {
		this.types = pokemonService.getPokemonTypes();
	}

	createForm = new FormGroup({
		id: new FormControl(0, [Validators.required, Validators.min(1)]),
		name: new FormControl('', Validators.required),
		height: new FormControl(0.00),
		weight: new FormControl(0.00),
		type1: new FormControl('', Validators.required),
		type2: new FormControl(''),
	});

	onSubmit() {
		this.pokemonService.postPokemon(this.createForm.value).subscribe(
			res => {
				if (res.status === 200) {
					alert('Pokemon Added');
					this.router.navigate(['/pokemon/' + this.createForm.value.id]);
				}
			},
			err => {
				alert('Unable to Add Pokemon');
			}
		);
	}
}
