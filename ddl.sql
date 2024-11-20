DROP DATABASE IF EXISTS pokemon;
CREATE DATABASE IF NOT EXISTS pokemon;
USE pokemon;

DROP TABLE IF EXISTS pokemon;
CREATE TABLE IF NOT EXISTS pokemon (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    height DECIMAL(6, 2) NOT NULL,
    weight DECIMAL(6, 2) NOT NULL,
    type1 VARCHAR(30) NOT NULL,
    type2 VARCHAR(30) DEFAULT NULL,
    image VARCHAR(300) DEFAULT NULL,
    PRIMARY KEY (id)
);

INSERT INTO `pokemon`
    (`id`, `name`, `height`, `weight`, `type1`, `type2`, `image`)
VALUES
    (NULL, 'bulbasaur', '7.10', '69.99', 'grass', 'poison', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'),
    (NULL, 'ivysaur', '10.23', '130.40', 'grass', 'poison', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png'),
    (NULL, 'venasaur', '20.03', '1000.80', 'grass', 'poison', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png'),
    (NULL, 'charmander', '6.20', '85.64', 'fire', null, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png'),
    (NULL, 'charmeleon', '11.34', '190.00', 'fire', null, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png'),
    (NULL, 'charizard', '17.47', '905.60', 'fire', 'flying', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png'),
    (NULL, 'squirtle', '5.01', '90.30', 'water', null, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png'),
    (NULL, 'wartortle', '10.40', '225.85', 'water', null, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png'),
    (NULL, 'blastoise', '16.72', '855.38', 'water', null, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png')