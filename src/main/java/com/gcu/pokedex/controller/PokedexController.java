package com.gcu.pokedex.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/pokedex")
public class PokedexController {

    @GetMapping("")
    public String index(Model model) {
        model.addAttribute("title", "Pokedex");
        return new String("pokedex");
    }
    
}
