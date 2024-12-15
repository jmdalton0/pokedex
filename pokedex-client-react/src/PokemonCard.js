import React from 'react';
import Artwork from "./Artwork";

function PokemonCard({id, name}) {
    return (
        <a href="/" className="card p-2 text-center">
            <span>{name}</span>
            <Artwork id={id}></Artwork>
        </a>
    );
}

export default PokemonCard;