import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "./data";
import Artwork from "./Artwork";
import Type from "./Type";

function Pokemon() {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState();

    useEffect(() => {
        async function getPokemon() {
            let res = await data.get('/pokemon/' + id);
            let list = res.data;
            if (list?.length > 0) {
                setPokemon(list[0]);
            } else {
                setPokemon();
            }
        }
        getPokemon();
    }, [id]);

    if (pokemon) {
        return (
            <main>
                <div className="d-flex flex-row">
                    <div className="d-flex flex-column w-75 p-4">
                        <h1 className="text-capitalize">{pokemon.name}</h1>
                        <table className="w-50">
                            <tbody>
                                <tr>
                                    <td>Index:</td>
                                    <td>{pokemon.id}</td>
                                </tr>
                                <tr>
                                    <td>Height:</td>
                                    <td>{pokemon.height}</td>
                                </tr>
                                <tr>
                                    <td>Weight:</td>
                                    <td>{pokemon.weight}</td>
                                </tr>
                                <tr>
                                    <td>Types:</td>
                                    <td className="d-flex flex-column">
                                        <Type type={pokemon.type1}></Type>
                                        <Type type={pokemon.type2}></Type>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="flex-grow-1"></div>
                        {/* <a routerLink="/edit-pokemon/{{ pokemon.id }}" className="btn btn-primary w-50">Edit</a> */}
                        {/* <button (click)="deletePokemon()" className="btn btn-danger w-50 mt-2">Delete</button> */}
                    </div>
                    <div className="d-flex flex-column p-4">
                        <Artwork id={pokemon.id}></Artwork>
                    </div>
                </div>
            </main>
        );
    } else {
        return (
            <main>
                <h3>A Pokemon with that ID has not been added to the Pokedex yet</h3>
            </main>
        );
    }
}

export default Pokemon;