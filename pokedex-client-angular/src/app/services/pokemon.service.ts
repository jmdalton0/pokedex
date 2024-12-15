import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class PokemonService {

	private url = 'http://localhost:8080';

	private types: string[] = [
		'normal',
		'fighting',
		'flying',
		'poison',
		'ground',
		'rock',
		'bug',
		'ghost',
		'steel',
		'fire',
		'water',
		'grass',
		'electric',
		'psychic',
		'ice',
		'dragon',
		'dark',
		'fairy',
	];

	constructor(private http: HttpClient) { }

	public getPokemonTypes() {
		return this.types;
	}

	public formatPokemonImageUrl(id: number) {
		return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
	}

	public formatTypeImageUrl(type: string) {
		let typeId = this.types.indexOf(type);
		if (typeId == -1) {
			typeId = 10001;
		} else {
			typeId = typeId + 1;
		}
		return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/emerald/${typeId}.png`
	}

	public getPokemon() {
		return this.http.get(this.url + '/pokemon');
	}

	public getPokemonById(id: number) {
		return this.http.get(this.url + '/pokemon/' + id, { observe: 'response' });
	}

	public postPokemon(pokemon: any) {
		return this.http.post(this.url + '/pokemon', pokemon, { observe: 'response' });
	}

	public putPokemon(pokemon: any) {
		return this.http.put(this.url + '/pokemon', pokemon, { observe: 'response' });
	}

	public deletPokemon(id: number) {
		return this.http.delete(this.url + '/pokemon/' + id, { observe: 'response'});
	}
}
