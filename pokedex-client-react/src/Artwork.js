import React from "react";

function Artwork({id}) {
	
    let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

    return (
        <img src={url} alt="A Pokemon"/>
    );
}

export default Artwork;