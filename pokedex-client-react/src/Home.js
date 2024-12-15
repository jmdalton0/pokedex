import React from 'react';
import Artwork from "./Artwork";

function Home() {
    return (
        <main className="text-center">
            <h1>Welcome to the Pokedex Application</h1>
            <Artwork id={25}></Artwork>
        </main>
    );
}

export default Home;