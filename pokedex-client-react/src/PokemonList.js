import React from 'react';
import PokemonCard from "./PokemonCard";

function PokemonList() {
    return (
        <main>
            <ul className="d-flex flex-row flex-wrap p-0">
                <li>
                    <PokemonCard id={7} name={'squirtle'}></PokemonCard>
                </li>
                <li>
                    <PokemonCard id={8} name={'wartortle'}></PokemonCard>
                </li>
            </ul>
        </main>
    );
}

export default PokemonList;