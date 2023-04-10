import React from 'react'
import MyContext from "../context/MyContext"
import {useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const pokemones = useContext(MyContext)
    const [pokemon, setPokemon] = useState("");
    const navigate = useNavigate();
    const irAPokemon = () => {
        navigate(`/pokemones/${pokemon.toLowerCase()}`)
    };

    return (
        <div className="text-center m-5">
            <h1>Selecciona un <strong>Pokémon <i className="bi bi-search"></i></strong></h1>
            <form>
                <label htmlFor="browser"></label>
                <input 
                    list="pokes" 
                    name="browser" 
                    id="browser" 
                    value={pokemon.toLowerCase()}
                    onChange={({target}) => setPokemon(target.value)}
                />
                <datalist id="pokes">
                    {pokemones.map(item =>
                        <option key={item.name} value={item.name.toUpperCase()}/>
                    )}
                </datalist>
                <button onClick={ irAPokemon }>Buscar</button>
            </form>
        </div>
    )
}

export default Home