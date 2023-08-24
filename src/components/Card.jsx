import React from 'react'
import { useEffect, useState } from 'react'
import "./Card.css"

const artwork = import.meta.env.VITE_ARTWORK;

const Card = (pokeUrl) => {
  const [pokeinfo, setPokeInfo] = useState([]);
  const [loading, setLoading] = useState([]);
  

  const getPokeInfo = async (url) => {
    setLoading(true);
    const res = await fetch(url);
    const data = await res.json();

    setLoading(false);
    setPokeInfo(data);
    
  }

  useEffect(() => {
    getPokeInfo(pokeUrl.pokeUrl);
   

  }, [])

  return (
    
    <div >
      {loading ? <div className="lds-ring"><div></div><div></div><div></div><div></div></div> 
      : <div className="card" id={pokeinfo.types[0].type.name}><div className="infos">
          <img src={artwork + pokeinfo.id + ".png"} /> 
          <h2>{pokeinfo.name.charAt(0).toUpperCase() + pokeinfo.name.slice(1)}</h2>
          {pokeinfo.types.length > 1 ? <div className='types'><h3>{pokeinfo.types[0].type.name.charAt(0).toUpperCase() + pokeinfo.types[0].type.name.slice(1)}</h3> <h3>{pokeinfo.types[1].type.name.charAt(0).toUpperCase() + pokeinfo.types[1].type.name.slice(1)}</h3></div> : <div className="types">
            <h3>{pokeinfo.types[0].type.name.charAt(0).toUpperCase() + pokeinfo.types[0].type.name.slice(1)}</h3>
          </div>}
          </div></div>}
      
    </div>
  )
}

export default Card