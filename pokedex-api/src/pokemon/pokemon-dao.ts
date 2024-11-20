import { execute } from "../db";

import { queries } from "./pokemon-queries";

import { Pokemon } from './pokemon';

export const readAllPokemon = async () => {
    return execute<Pokemon[]>(queries.readAll, []);
};

export const readPokemonById = async (id: string) => {
    return execute<Pokemon>(queries.readById, [id]);
};

export const createPokemon = async (pokemon: Pokemon) => {
    return execute<Object>(
        queries.create,
        [
            pokemon.name,
            pokemon.height.toString(),
            pokemon.weight.toString(),
            pokemon.type1,
            pokemon.type2,
            pokemon.image
        ],
    );
};

export const updatePokemon = async (pokemon: Pokemon) => {
    return execute<Object>(
        queries.update,
        [
            pokemon.name,
            pokemon.height.toString(),
            pokemon.weight.toString(),
            pokemon.type1,
            pokemon.type2,
            pokemon.image,
            pokemon.id.toString()
        ],
    );
};

export const deletePokemon = async (id: string) => {
    return execute<Object>(queries.delete, [id]);
};