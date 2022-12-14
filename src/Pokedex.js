import Pokecard from "./Pokecard";

import "./Pokedex.css";


const pokemon = [
  { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
  { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
  { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
  { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
  { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
  { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
  { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
  { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
];

/**  renders a sequence of Pokecard components*/
function Pokedex({ pokemons=pokemon }) {

  //map over pokemons and list out each card
  return (
    <div className="pokedex">
        {pokemons.map(ele =>
          <Pokecard
            id={ele.id}
            name={ele.name}
            type={ele.type}
            baseExperience={ele.base_experience}/>)}

    </div>
  );
}

export default Pokedex;