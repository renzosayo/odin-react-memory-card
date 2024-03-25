import { useEffect, useState } from "react";
import Card from "./Card";
import Scoreboard from "./Scoreboard";

export default function Game2() {
  const [images, setImages] = useState({});
  const [clicks, setClicks] = useState([]);
  const [highScore, setHighScore] = useState(0);
  const names = [
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

  useEffect(() => {
    names.forEach(async (name) => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await res.json();
      const img = data.sprites.front_default;
      setImages((prev) => {
        return { ...prev, [name]: img };
      });
    });
  }, []);

  useEffect(() => {
    if (clicks.length > highScore) setHighScore(clicks.length);
    if (clicks.length === names.length) {
      alert("You Win!");
      setClicks([]);
    }
  }, [clicks]);

  const randomizeArray = (arr) => {
    const newArr = [];
    const arrCopy = [...arr];

    while (arrCopy.length > 0) {
      let randomIndex = Math.floor(Math.random() * 12);
      newArr.push(arrCopy.splice(randomIndex, 1));
    }
    return newArr;
  };

  const handleClick = (name) => {
    if (clicks.includes(name)) {
      alert("You lose!");
      setClicks([]);
    } else setClicks((prev) => [...prev, name]);
  };

  let cards = names.map((pokemon) => {
    return (
      <>
        <div key={pokemon}>
          <Card
            name={pokemon}
            url={images[pokemon]}
            handleClick={() => {
              handleClick(pokemon);
            }}
          />
        </div>
      </>
    );
  });

  cards = randomizeArray(cards);

  return (
    <>
      <Scoreboard score={clicks.length} highScore={highScore} />
      <div className="game">{cards}</div>
    </>
  );
}
