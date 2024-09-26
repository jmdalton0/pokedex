package com.gcu.pokedex.service;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.gcu.pokedex.db.PokemonDAO;
import com.gcu.pokedex.model.Pokemon;
import com.gcu.pokedex.model.Pokemon.PokemonComparator;

@Service
public class PokemonService {

    private String pokeapi = "https://pokeapi.co/api/v2/pokemon/";
    private String pokeapiType = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/emerald/$.png";

    public class PokemonNotFoundException extends Exception {}

    @Autowired
    private PokemonDAO repo;
    
    public Pokemon getPokemon(String name) throws PokemonNotFoundException {
        String req = pokeapi + name.toLowerCase();

        RestTemplate restTemplate = new RestTemplate();
        ObjectMapper om = new ObjectMapper();
        JsonNode root;
        Pokemon pokemon;

        try {
            String res = restTemplate.getForObject(req, String.class);

            // Pokemon fields that map directly from serialized json
            pokemon = om.readValue(res, Pokemon.class);

            // get root node for more granular parsing
            root = om.readTree(res);

            // sprite url
            pokemon.setSprite(root.get("sprites").get("front_default").asText());

            // type urls
            for (int i = 0; i < root.get("types").size(); i++) {
                String typeInd = root.get("types").get(i).get("type").get("url").asText();
                typeInd = typeInd.substring(0, typeInd.length() - 1);
                typeInd = typeInd.substring(typeInd.lastIndexOf("/") + 1);
                String typeUrl = pokeapiType.replaceAll("\\$", typeInd);
                pokemon.addType(typeUrl);
            }

            if (repo.getByName(name) != null) {
                pokemon.setCaught(true);
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
            throw new PokemonNotFoundException();
        }

        return pokemon;
    }

    public List<Pokemon> allPokemon() {
        List<Pokemon> allPokemon = repo.getAll();
        for (int i = 0; i < allPokemon.size(); i++) {
            try {
                Pokemon pokemon = getPokemon(allPokemon.get(0).getName());
                allPokemon.remove(0);
                allPokemon.add(pokemon);
            } catch (PokemonNotFoundException e) {
                repo.delete(allPokemon.get(i).getName());
            }
        }
        Collections.sort(allPokemon, new PokemonComparator());
        return allPokemon;
    }

    public boolean addPokemon(String name) {
        try {
            if (repo.getByName(name) == null) {
                return repo.create(name);
            }
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public boolean deletePokemon(String name) {
        return repo.delete(name);
    }
}
