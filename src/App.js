import React from 'react';
import logo from './logo.svg';
import './App.css';
import Pokedex from './Pokedex';
import './Pokedex.css'

function App() {
  return(<div> <h1> Pokegame</h1>
    <h2>Deck 1</h2>
    <Pokedex className="Pokedex"/>
    <h2>Deck 2</h2>
    <Pokedex className="Pokedex"/>
  </div>)
}

export default App;
