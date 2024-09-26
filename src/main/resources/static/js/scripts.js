async function search() {
    const url = "/api/pokedex/search/";
    let pokemon = document.getElementById('search').value;
    if (!pokemon) {
        pokemon = "none";
    }

    try {
        const res = await fetch(url + pokemon);
        if (res.status === 200) {
            let json = await res.json();
            displayFull(json);
        }
    } catch (e) {
        console.log(e.message);
    }
}

async function allPokemon() {
    const url = "/api/pokedex/all";
    try {
        const res = await fetch(url);
        if (res.status === 200) {
            let json = await res.json();
            displayAll(json);
        }
    } catch (e) {
        console.log(e.message);
    }
}

async function catchPokemon() {
    const url = "/api/pokedex/catch/";
    let pokemon = document.getElementById('search').value;
    if (!pokemon) {
        return;
    }

    try {
        const res = await fetch(url + pokemon, {
            method: "POST",
        });
        if (res.status === 200) {
            let json = await res.json();
            if (json) {
                displayCaught();
            }
        }
    } catch (e) {
        console.log(e.message);
    }
}

async function releasePokemon() {
    let pokemon = document.getElementById('search').value;
    releasePokemon(pokemon);
    displayReleased();
}

async function releasePokemon(pokemon) {
    const url = "/api/pokedex/release/";
    if (!pokemon) {
        return;
    }

    try {
        const res = await fetch(url + pokemon, {
            method: "DELETE",
        });
        if (res.status === 200) {
            let json = await res.json();
            if (json) {
                allPokemon();
            }
        }
    } catch (e) {
        console.log(e.message);
    }
}

function displayFull(pokemon) {
    document.getElementById('name').innerText = pokemon.name;
    document.getElementById('order').innerText = pokemon.order;
    document.getElementById('height').innerText = pokemon.height;
    document.getElementById('weight').innerText = pokemon.weight;
    document.getElementById('sprite').src = pokemon.sprite;

    let types = document.getElementById('types');
    types.innerHTML = '';
    pokemon.types.forEach((t) => {
        let type = document.createElement('img');
        type.src = t;
        type.classList.add('type');
        types.appendChild(type);
    });

    if (pokemon.caught) {
        displayCaught();
    } else {
        displayReleased();
    }
}

function displayAll(allPokemon) {
    let list = document.getElementById('all-pokemon');
    let listItem = list.firstElementChild;
    list.innerHTML = '';
    allPokemon.forEach((pokemon) => {
        let newListItem = listItem.cloneNode(true);
        newListItem.querySelector('.name').innerText = pokemon.name;
        newListItem.querySelector('.sprite').src = pokemon.sprite;
        function makeFunction(name) {
            return () => {releasePokemon(name)};
        }
        newListItem.querySelector('.btn').onclick = makeFunction(pokemon.name);
        list.appendChild(newListItem);
    });
}

function displayCaught() {
    document.getElementById('caught-btn').onclick = releasePokemon;
    document.getElementById('caught-btn').classList.add('btn-primary');
    document.getElementById('caught-btn').classList.remove('btn-secondary');
    document.getElementById('caught-btn-img').src = '/img/poke-ball.png';
}

function displayReleased() {
    document.getElementById('caught-btn').onclick = catchPokemon;
    document.getElementById('caught-btn').classList.add('btn-secondary');
    document.getElementById('caught-btn').classList.remove('btn-primary');
    document.getElementById('caught-btn-img').src = '/img/poke-ball-gray.png';
}
