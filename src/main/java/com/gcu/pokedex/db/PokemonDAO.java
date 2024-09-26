package com.gcu.pokedex.db;

import java.util.ArrayList;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Service;

import com.gcu.pokedex.model.Pokemon;


@Service
public class PokemonDAO {

    @Autowired
    private JdbcTemplate template;
    
    public PokemonDAO(DataSource dataSource) {
        this.template = new JdbcTemplate(dataSource);
    }

    public Pokemon getByName(String name) {
        String sql = "SELECT * FROM pokemon WHERE name = ?";
        try {
            RowMapper<Pokemon> pokemonRowMapper = (rs, rowNum) -> {
                Pokemon pokemon = new Pokemon();
                pokemon.setId(rs.getInt("id"));
                pokemon.setName(rs.getString("name"));
                return pokemon;
            };
            return template.queryForObject(sql, pokemonRowMapper, name);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public List<Pokemon> getAll() {
        String sql = "SELECT * FROM pokemon";
        List<Pokemon> allPokemon = new ArrayList<>();
        try {
            SqlRowSet srs = template.queryForRowSet(sql);
            while (srs.next()) {
                int id = srs.getInt("id");
                String name = srs.getString("name");
                Pokemon pokemon = new Pokemon();
                pokemon.setId(id);
                pokemon.setName(name);
                allPokemon.add(pokemon);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return allPokemon;
    }

    public boolean create(String name) {
        String sql = "INSERT INTO pokemon (name) VALUES (?);";
        try {
            return template.update(sql, name) == 1;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }

    public boolean delete(String name) {
        String sql = "DELETE FROM pokemon WHERE name = ?";
        try {
            return template.update(sql, name) == 1;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }

}
