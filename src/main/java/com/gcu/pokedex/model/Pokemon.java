package com.gcu.pokedex.model;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Pokemon {
    
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private int id;

    private String name;

    private int order;

    private int height;

    private int weight;

    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private List<String> types;

    private String sprite;

    private boolean caught;

    public Pokemon() {
        id = 0;
        name = "Pokemon Not Found";
        order = 0;
        height = 0;
        weight = 0;
        types = new ArrayList<>();
        sprite = "https://static.vecteezy.com/system/resources/previews/000/449/830/non_2x/question-mark-vector-icon.jpg";
        caught = false;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public int getOrder() {
        return order;
    }

    public int getHeight() {
        return height;
    }

    public int getWeight() {
        return weight;
    }

    public List<String> getTypes() {
        return types;
    }

    public String getSprite() {
        return sprite;
    }

    public boolean isCaught() {
        return caught;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setOrder(int order) {
        this.order = order;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public void addType(String type) {
        this.types.add(type);
    }

    public void setSprite(String sprite) {
        this.sprite = sprite;
    }

    public void setCaught(boolean caught) {
        this.caught = caught;
    }

    public static class PokemonComparator implements Comparator<Pokemon> {
        @Override
        public int compare(Pokemon a, Pokemon b) {
            return a.getOrder() - b.getOrder();
        }
    }

}
