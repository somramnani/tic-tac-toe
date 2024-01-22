import "./App.css";
import { useState } from "react";

function App() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const handleClick = (e) => {
    e.target.innerText = "X";
  };
  return (
    <div className="container">
      {board.map((item, index) => {
        return (
          <div onClick={(e) => handleClick(e)} className="item">
            {item}
          </div>
        );
      })}
    </div>
  );
}

export default App;
