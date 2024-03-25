import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function Card({ name, url, handleClick }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    setImageUrl(url);
  }, [url]);

  return (
    url && (
      <div className="card">
        <img
          src={imageUrl}
          alt={name}
          onClick={() => {
            handleClick(name);
          }}
        />
      </div>
    )
  );
}

Card.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  handleClick: PropTypes.func,
};
