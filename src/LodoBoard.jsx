import { useState } from "react"

export default function LudoBoard() {
  const [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });

  const handleMove = (color) => {
    setMoves((prevMoves) => ({
      ...prevMoves,
      [color]: prevMoves[color] + 1
    }));
  };

  return (
    <div>
      <p>Game Begins!</p>
      <div className="board">
        <p>Blue moves = {moves.blue}</p>
        <button onClick={() => handleMove('blue')} style={{ backgroundColor: "blue" }}>+1</button>
        <p>Yellow moves = {moves.yellow}</p>
        <button onClick={() => handleMove('yellow')} style={{ backgroundColor: "yellow", color: "black" }}>+1</button>
        <p>Green moves = {moves.green}</p>
        <button onClick={() => handleMove('green')} style={{ backgroundColor: "green" }}>+1</button>
        <p>Red moves = {moves.red}</p>
        <button onClick={() => handleMove('red')} style={{ backgroundColor: "red" }}>+1</button>
      </div>
    </div>
  );
}
