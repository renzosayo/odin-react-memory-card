import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function Card({ name, handleClick }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => {
        if (!res.ok) throw Error("could not fetch");
        return res.json();
      })
      .then((data) => {
        setImageUrl(data.sprites.front_default);
      })
      .catch((e) => {
        console.log(e.message);
      });
  });

  return (
    <div className="card">
      <img
        src={imageUrl}
        alt={name}
        onClick={() => {
          handleClick(name);
        }}
      />
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  handleClick: PropTypes.func,
};
