import { Router } from "express";

import * as pokemonController from './pokemon-controller';

const router = Router();

router.route('/pokemon').get(pokemonController.readAllPokemon);

router.route('/pokemon/:id').get(pokemonController.readPokemonById);

router.route('/pokemon').post(pokemonController.createPokemon);

router.route('/pokemon').put(pokemonController.updatePokemon);

router.route('/pokemon/:id').delete(pokemonController.deletePokemon);

export default router;