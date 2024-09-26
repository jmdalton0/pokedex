package com.gcu.pokedex.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gcu.pokedex.model.Pokemon;
import com.gcu.pokedex.service.PokemonService;
import com.gcu.pokedex.service.PokemonService.PokemonNotFoundException;

@RestController
@RequestMapping("/api/pokedex")
public class PokedexControllerApi {

    @Autowired
    private PokemonService service;
    
    @GetMapping(path = "/search/{name}", produces = {MediaType.APPLICATION_JSON_VALUE})
    public Pokemon getPokemon(@PathVariable String name) {
        try {
            return service.getPokemon(name);
        } catch (PokemonNotFoundException e) {
            return new Pokemon();
        }
    }

    @GetMapping(path = "/all", produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<Pokemon> allPokemon() {
        return service.allPokemon();
    }

    @PostMapping(path = "/catch/{name}")
    public boolean catchPokemon(@PathVariable String name) {
        return service.addPokemon(name);
    }

    @DeleteMapping(path = "/release/{name}")
    public boolean releasePokemon(@PathVariable String name) {
        return service.deletePokemon(name);
    }
 
}
