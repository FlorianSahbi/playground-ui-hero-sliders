import React, { useState } from 'react';
import './App.css';

const pokemons = [
  {
    id: 0,
    generation: "I",
    name: "Caterpie",
    description: "Caterpie (Japanese: キャタピー Caterpie) is a Bug-type Pokémon introduced in Generation I. It evolves into Metapod starting at level 7, which evolves into Butterfree starting at level 10.",
    img: "http://pngimg.com/uploads/pokemon/pokemon_PNG153.png",
    itemLeftColor: "#CFE537",
    itemRightColor: "#5FA457"
  },
  {
    id: 1,
    generation: "I",
    name: "Bulbizarre",
    description: "Bulbasaur (Japanese: フシギダネ Fushigidane) is a dual-type Grass/Poison Pokémon introduced in Generation I. It evolves into Ivysaur starting at level 16, which evolves into Venusaur starting at level 32. Along with Charmander and Squirtle, Bulbasaur is one of three starter Pokémon of Kanto available at the beginning of Pokémon Red, Green, Blue, FireRed, and LeafGreen.",
    img: "http://pngimg.com/uploads/pokemon/pokemon_PNG122.png",
    itemLeftColor: "#52A361",
    itemRightColor: "#73C29D"
  },
  {
    id: 2,
    generation: "I",
    name: "Squirtle",
    description: "Squirtle (Japanese: ゼニガメ Zenigame) is a Water-type Pokémon introduced in Generation I. It evolves into Wartortle starting at level 16, which evolves into Blastoise starting at level 36. Along with Bulbasaur and Charmander, Squirtle is one of three starter Pokémon of Kanto available at the beginning of Pokémon Red, Green, Blue, FireRed, and LeafGreen.",
    img: "http://pngimg.com/uploads/pokemon/pokemon_PNG116.png",
    itemLeftColor: "#F3E482",
    itemRightColor: "#96D5D0"
  },
  {
    id: 3,
    generation: "I",
    name: "Eevee",
    description: "Eevee (Japanese: イーブイ Eievui) is a Normal-type Pokémon introduced in Generation I. It evolves into one of eight different Pokémon. Eevee is the game mascot and starter Pokémon in Pokémon: Let's Go, Eevee!, as well as for the main characters of Pokémon XD: Gale of Darkness and Pokémon Conquest. It is also the rival's starter Pokémon in Pokémon Yellow, although Professor Oak originally intended to give it to the player.",
    img: "http://pngimg.com/uploads/pokemon/pokemon_PNG91.png",
    itemLeftColor: "#6D3E09",
    itemRightColor: "#CE9956"
  },
  {
    id: 4,
    generation: "IV",
    name: "Piplup",
    description: "Piplup (Japanese: ポッチャマ Pochama) is a Water-type Pokémon introduced in Generation IV. It evolves into Prinplup starting at level 16, which evolves into Empoleon starting at level 36. Along with Turtwig and Chimchar, Piplup is one of three starter Pokémon of Sinnoh available at the beginning of Pokémon Diamond, Pearl, and Platinum.",
    img: "http://pngimg.com/uploads/pokemon/pokemon_PNG85.png",
    itemLeftColor: "#5A83BA",
    itemRightColor: "#A8DFEC"
  }
]

const animationsStates = [
  {
    id: 0,
    classes: "animate--start"
  },
  {
    id: 1,
    classes: "flex--active"
  },
  {
    id: 2,
    classes: "animate--end flex--active"
  },
  {
    id: 3,
    classes: "animate--start flex--preStart"
  }
]

const PokemonPanel = (props) => {
  return (
    <div className={`flex__container flex--${props.name.toLowerCase()} ${props.animationState}`}>
      <div className="flex__item flex__item--left" style={{ background: props.itemLeftColor }}>
        <div className="flex__content">
          <p className="text--sub">Pokemon Gen {props.generation}</p>
          <h1 className="text--big">{props.name}</h1>
          <p className="text--normal">{props.description}</p>
        </div>
        <p className="text__background">{props.name}</p>
      </div>
      <div className="flex__item flex__item--right" style={{ background: props.itemRightColor }}></div>
      <img className="pokemon__img" alt="pokemon__img" src={props.img} />
    </div>
  )
}

const App = () => {

  const [current, setCurrent] = useState({ id: pokemons[0].id, state: 1 });
  const [next, setNext] = useState({ id: null, state: 0 });

  const handleClick = (e, value) => {
    e.preventDefault();

    if (value === current.id) {
      return
    } else {
      setCurrent({ id: current.id, state: 2 })
      setNext({ id: pokemons[value].id, state: 3 })

      setTimeout(() => {
        setCurrent({ id: current.id, state: 0 })
        setNext({ id: pokemons[value].id, state: 1 })

        setTimeout(() => {
          setCurrent({ id: pokemons[value].id, state: 1 })
          setNext({ id: null, state: 0 })
        }, 100);
      }, 1000);
    }
  }

  return (
    <>
      <div className="slider__warpper">
        {pokemons.map(pkm => {

          if (current.id === pkm.id) {
            return <PokemonPanel
              animationState={animationsStates[current.state].classes}
              name={pkm.name}
              id={pkm.id}
              generation={pkm.generation}
              description={pkm.description} img={pkm.img}
              itemLeftColor={pkm.itemLeftColor}
              itemRightColor={pkm.itemRightColor}
            />
          }

          if (next.id === pkm.id) {
            return <PokemonPanel
              animationState={animationsStates[next.state].classes}
              name={pkm.name}
              id={pkm.id}
              generation={pkm.generation}
              description={pkm.description} img={pkm.img}
              itemLeftColor={pkm.itemLeftColor}
              itemRightColor={pkm.itemRightColor}
            />
          }

          else {
            return <PokemonPanel
              animationState={animationsStates[0].classes}
              name={pkm.name}
              id={pkm.id}
              generation={pkm.generation}
              description={pkm.description} img={pkm.img}
              itemLeftColor={pkm.itemLeftColor}
              itemRightColor={pkm.itemRightColor}
            />
          }
        })}
      </div>

      <div className="slider__navi">
        <a href="https://www.idunno.com" onClick={(e) => handleClick(e, 0)} className="slide-nav">content</a>
        <a href="https://www.idunno.com" onClick={(e) => handleClick(e, 1)} className="slide-nav">content</a>
        <a href="https://www.idunno.com" onClick={(e) => handleClick(e, 2)} className="slide-nav">content</a>
        <a href="https://www.idunno.com" onClick={(e) => handleClick(e, 3)} className="slide-nav">content</a>
        <a href="https://www.idunno.com" onClick={(e) => handleClick(e, 4)} className="slide-nav">content</a>
      </div>
    </>
  );
}

export default App;
