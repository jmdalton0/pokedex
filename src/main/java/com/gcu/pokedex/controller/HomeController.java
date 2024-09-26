package com.gcu.pokedex.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class HomeController {

    @GetMapping("/")
    public String index(Model model) {
        model.addAttribute("title", "Home");
        return new String("home");
    }
    
    @GetMapping("/become-a-trainer")
    public String trainer(Model model) {
        model.addAttribute("title", "Become a Trainer");    
        return new String("trainer");
    }
    
}
