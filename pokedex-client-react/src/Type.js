import React from "react";

function Type({type}) {

	const types = [
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

    let typeId = types.indexOf(type);
    if (typeId === -1) {
        return "";
    } else {
        typeId = typeId + 1;
	    let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/emerald/${typeId}.png`;
        return <img src={url} alt="A Type"/>
    }
}

export default Type;