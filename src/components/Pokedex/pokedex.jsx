import PokemonList from "../pokemonList/pokemonList";
import Search from "../search/search";
import './Pokedox.css'

import PokemonDetails from "../pokemonDetails/pokemonDetail";
import { useState } from "react";




function Pokedex() {

    const [searchTerm, setSearchterm] = useState('');

    return (
        <div className="pokedex-wrapper">
            <Search updateSearchTerm={setSearchterm} />
            { (!searchTerm) ? <PokemonList /> : <PokemonDetails key={searchTerm} pokemonName={searchTerm} />}
        </div>
    )
}

export default Pokedex;