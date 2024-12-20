import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import View from './View';
import List from './List';
import Add from './Add';
import Edit from './Edit';

function App() {
	return (
		<>
			<BrowserRouter>
				<Nav></Nav>
				<Routes>
					<Route path='/' element={<Home></Home>}></Route>
					<Route path='/pokemon' element={<List></List>}></Route>
					<Route path='/pokemon/:id' element={<View></View>}></Route>
					<Route path='/add-pokemon' element={<Add></Add>}></Route>
					<Route path='/edit-pokemon/:id' element={<Edit></Edit>}></Route>
				</Routes>
			</BrowserRouter>
			<footer className="fixed-bottom bg-dark text-light text-center py-3">
				<h6 className="m-0">Pokedex Application: Milestone 4</h6>
			</footer>
		</>
	);
}

export default App;
