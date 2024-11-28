import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class PokemonService {

	private url = 'http://localhost:3000';

	constructor(private http: HttpClient) { }

	public formatPokemonImageUrl(id: number) {
		return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
	}

	public formatTypeImageUrl(type: string) {
		let typeId: number;
		switch (type) {
			case 'normal': typeId = 1;
			break;
			case 'fighting': typeId = 2;
			break;
			case 'flying': typeId = 3;
			break;
			case 'poison': typeId = 4;
			break;
			case 'ground': typeId = 5;
			break;
			case 'rock': typeId = 6;
			break;
			case 'bug': typeId = 7;
			break;
			case 'ghost': typeId = 8;
			break;
			case 'steel': typeId = 9;
			break;
			case 'fire': typeId = 10;
			break;
			case 'water': typeId = 11;
			break;
			case 'grass': typeId = 12;
			break;
			case 'electric': typeId = 13;
			break;
			case 'psychic': typeId = 14;
			break;
			case 'ice': typeId = 15;
			break;
			case 'dragon': typeId = 16;
			break;
			case 'dark': typeId = 17;
			break;
			case 'fairy': typeId = 18;
			break;
			default: typeId = 10001;
		}
		return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/emerald/${typeId}.png`
	}

	public getPokemon() {
		return this.http.get(this.url + '/pokemon');
	}

	public getPokemonById(id: number) {
		return this.http.get(this.url + '/pokemon/' + id);
	}
}
