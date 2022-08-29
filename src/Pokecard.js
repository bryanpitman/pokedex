import './Pokecard.css';

const POKE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

/** Shows a single Pokemon, with their name, image, and type */
function Pokecard({ id, name, type, baseExperience }) {
  return (
    <div className="Pokecard">
      <span className="Pokecard-name">{name}</span>
      <img src={`${POKE_URL}${id}.png`} alt={`${name} pic`} />
      <span className="Pokecard-type">Type: {type}</span>
      <span className="Pokecard-exp">EXP: {baseExperience}</span>
    </div>

  );
}

export default Pokecard;