DROP DATABASE IF EXISTS pokemon;
CREATE DATABASE IF NOT EXISTS pokemon;
USE pokemon;

DROP TABLE IF EXISTS pokemon;
CREATE TABLE IF NOT EXISTS pokemon (
    id INT(11) NOT NULL,
    name VARCHAR(30) NOT NULL,
    height DECIMAL(6, 2) NOT NULL,
    weight DECIMAL(6, 2) NOT NULL,
    type1 VARCHAR(30) NOT NULL,
    type2 VARCHAR(30) DEFAULT NULL,
    PRIMARY KEY (id)
);

INSERT INTO `pokemon`
    (`id`, `name`, `height`, `weight`, `type1`, `type2`)
VALUES
    (1, 'bulbasaur', '7.10', '69.99', 'grass', 'poison'),
    (2, 'ivysaur', '10.23', '130.40', 'grass', 'poison'),
    (3, 'venasaur', '20.03', '1000.80', 'grass', 'poison'),
    (4, 'charmander', '6.20', '85.64', 'fire', null),
    (5, 'charmeleon', '11.34', '190.00', 'fire', null),
    (6, 'charizard', '17.47', '905.60', 'fire', 'flying'),
    (7, 'squirtle', '5.01', '90.30', 'water', null),
    (8, 'wartortle', '10.40', '225.85', 'water', null),
    (9, 'blastoise', '16.72', '855.38', 'water', null)