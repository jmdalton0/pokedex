import React, { useEffect, useState } from 'react';
import Card from "./Card";
import data from './data';

function PokemonList() {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        async function getPokemon() {
            try {
                let res = await data.get('/pokemon');
                setPokemon(res.data);
            } catch (e) {
                setPokemon([]);
            }
        }
        getPokemon();
    }, []);

    function renderPokemon() {
        if (pokemon.length === 0) {
            return <li>No Pokemon Saved</li>
        }
        return pokemon.map((p) => {
            return (
                <li key={p.id} className="w-25 p-2">
                    <Card id={p.id} name={p.name}></Card>
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