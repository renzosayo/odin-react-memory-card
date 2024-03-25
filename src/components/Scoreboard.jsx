import { PropTypes } from "prop-types";

export default function Scoreboard({ score, highScore }) {
  return (
    <div className="scoreboard">
      <p className="current-score">Score: {score}</p>
      <p className="high-score">High Score: {highScore}</p>
    </div>
  );
}

Scoreboard.propTypes = {
  score: PropTypes.number,
  highScore: PropTypes.number,
};
