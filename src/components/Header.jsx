export default function Header() {
  return (
    <div className="header">
      <h1 className="title">Odin Memory Card</h1>
      <p className="instructions">
        Select all the cards without picking the same in a row to win!
      </p>
      <p className="current-score">Score: </p>
      <p className="high-score">Best Score: </p>
    </div>
  );
}
