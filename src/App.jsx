
import './App.css'
import { useState, useEffect } from 'react'

import Card from "./components/Card"


const URL = import.meta.env.VITE_API;

function App() {
  const [loading, setLoading] = useState([]);
  const [pokemons, setPokemons] = useState([]);

  const getPokemons = async(url) => {
    const res = await fetch(url);
    const data = await res.json();

    setPokemons(data.results);
  }


  useEffect(() => {
    getPokemons(URL);
  }, [])

  return (
   <div>
   <a target="_blank" href="https://fontmeme.com/pokemon-font/"><img src="https://fontmeme.com/permalink/230817/c057696fb1ef3abaf822c1e9ea3196da.png" alt="pokemon-font" border="0" /></a>
    <div className='poke-container'>
      {pokemons.map((pokemon) => (
        <Card pokeUrl={pokemon.url} key={pokemon.name} />
      ))}
    </div>
   </div>
  )
}

export default App
