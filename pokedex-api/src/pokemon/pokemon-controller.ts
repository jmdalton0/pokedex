import { Request, Response, RequestHandler } from "express"

import * as pokemonDAO from './pokemon-dao';
import { Pokemon } from "../../../models/pokemon";

export const readAllPokemon: RequestHandler = async (req: Request, res: Response) => {
    try {
        let allPokemon = await pokemonDAO.readAllPokemon();
        res.status(200).json(allPokemon);
    } catch (e) {
        res.status(500).json({
            error: e,
        });
    }
};

export const readPokemonById: RequestHandler = async (req: Request, res: Response) => {
    try {
        let pokemon: Pokemon = await pokemonDAO.readPokemonById(req.params.id);
        res.status(200).json(pokemon);
    } catch (e) {
        res.status(500).json({
            error: e,
        });
    }
};

export const createPokemon: RequestHandler = async (req: Request, res: Response) => {
    try {
        let result = await pokemonDAO.createPokemon(req.body);
        res.status(200).json(result);
    } catch (e) {
        res.status(500).json({
            error: e,
        });
    }
};

export const updatePokemon: RequestHandler = async (req: Request, res: Response) => {
    try {
        let result = await pokemonDAO.updatePokemon(req.body);
        res.status(200).json(result);
    } catch (e) {
        res.status(500).json({
            error: e,
        });
    }
};

export const deletePokemon: RequestHandler = async (req: Request, res: Response) => {
    try {
        let result = await pokemonDAO.deletePokemon(req.params.id);
        res.status(200).json(result);
    } catch (e) {
        res.status(500).json({
            error: e,
        });
    }
};
