import Card from "./Card";
import { useState } from "react";

export default function Game() {
  // clicked images
  const [clicks, setClicks] = useState([]);
  const pokemonNames = [
    "milotic",
    "heracross",
    "flygon",
    "starmie",
    "gyarados",
    "blastoise",
    "latios",
    "tyranitar",
    "breloom",
    "snorlax",
    "gardevoir",
    "scizor",
  ];

  // const pokemonImages = [];

  const handleClick = (name) => {
    setClicks([...clicks, name]);
  };

  let cards = pokemonNames.map((pokemon) => {
    return <Card name={pokemon} key={pokemon} handleClick={handleClick} />;
  });

  const randomizeArray = (arr) => {
    const newArr = [];
    const arrCopy = [...arr];

    while (arrCopy.length > 0) {
      let randomIndex = Math.floor(Math.random() * 12);
      newArr.push(arrCopy.splice(randomIndex, 1));
    }
    return newArr;
  };

  cards = randomizeArray(cards);

  return <div className="game">{cards}</div>;
}
