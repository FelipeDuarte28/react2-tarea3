import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Pokemones = () => {

    const { pokemon } = useParams();

    const [pkm, setPkm] = useState([])

    useEffect(() => {
        pokemonInfo();
    }, []);

    const pokemonInfo = async () => {
        let dataPokemon = [];
        try {
            let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
            let data = await res.json();
            dataPokemon = 
                {
                    imgSource: data.sprites.front_default,
                    hp: data.stats[0].base_stat,
                    attack: data.stats[1].base_stat,
                    defense: data.stats[2].base_stat,
                    special_attack: data.stats[3].base_stat,
                    special_defense: data.stats[4].base_stat,
                    speed: data.stats[5].base_stat,
                    type: data.types[0].type.name
                };
        } catch (err) {
            alert(err.message);
        }
        setPkm(dataPokemon);
    }

    return (
        <div className="card h-100 mx-auto p-2" style={{width: "300px"}}>
            <img src={pkm.imgSource} className="card-img-top" alt="..." style={{width: "300px"}}/>

            <div className="card-body">
                <h2>{pokemon.toUpperCase()}</h2>
                <p className="card-text">HP: {pkm.hp}</p>
                <p className="card-text">Attack: {pkm.attack}</p>
                <p className="card-text">Defense: {pkm.defense}</p>
                <p className="card-text">Special attack: {pkm.special_attack}</p>
                <p className="card-text">Special defense: {pkm.special_defense}</p>
                <p className="card-text">Speed: {pkm.speed}</p>
                <p className="card-text">Type: {pkm.type}</p>
            </div>
        </div>
    )
}

export default Pokemones