import React, { useEffect } from "react";
import "./pokemonList.css";
import Pokemon from "../pokemon/pokemon";
import usePokemonList from "../../hooks/usePokemonList";

function PokemonList() {
    const [pokemonListState, setPokemonListState] = usePokemonList();

    useEffect(() => {
        console.log("render");
    }, [pokemonListState]);

    return (
        <div className="pokemon-list-wrapper">
            <div className="pokemon-wrapper">
                {pokemonListState.isLoading ? "Loading...." : 
                    pokemonListState.pokemonList.map((p) => (
                        <Pokemon name={p.name} image={p.image} key={p.id} id={p.id} />
                    ))
                }
            </div>
            <div className="controls">
                <button
                    disabled={pokemonListState.prevUrl == null}
                    onClick={() => {
                        const urlToSet = pokemonListState.prevUrl;
                        setPokemonListState({ ...pokemonListState, pokedexUrl: urlToSet });
                    }}
                >
                    Prev
                </button>
                <button
                    disabled={pokemonListState.nextUrl == null}
                    onClick={() => {
                        const urlToSet = pokemonListState.nextUrl;
                        setPokemonListState({ ...pokemonListState, pokedexUrl: urlToSet });
                    }}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default PokemonList;