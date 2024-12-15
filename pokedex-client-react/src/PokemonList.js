import React, { useEffect, useState } from 'react';
import PokemonCard from "./PokemonCard";
import data from './data';

function PokemonList() {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        async function getPokemon() {
            let res = await data.get('/pokemon');
            setPokemon(res.data);
        }
        getPokemon();
    }, [pokemon]);

    function renderPokemon() {
        return pokemon.map((p) => {
            return (
                <li key={p.id} className="w-25 p-2">
                    <PokemonCard id={p.id} name={p.name}></PokemonCard>
                </li>
            );
        });
    }

    return (
        <main>
            <ul className="d-flex flex-row flex-wrap p-0">
                {renderPokemon()}
            </ul>
        </main>
    );
}

export default PokemonList;