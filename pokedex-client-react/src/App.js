import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Pokemon from './Pokemon';
import PokemonList from './PokemonList';

function App() {
	return (
		<>
			<BrowserRouter>
				<Nav></Nav>
				<Routes>
					<Route path='/' element={<Home></Home>}></Route>
					<Route path='/pokemon' element={<PokemonList></PokemonList>}></Route>
					<Route path='/pokemon/:id' element={<Pokemon></Pokemon>}></Route>
				</Routes>
			</BrowserRouter>
			<footer className="fixed-bottom bg-dark text-light text-center py-3">
				<h6 className="m-0">Pokedex Application: Milestone 4</h6>
			</footer>
		</>
	);
}

export default App;
