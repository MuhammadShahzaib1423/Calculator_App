import React, { useState } from "react";
import './styles.css';

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculateResult = () => {
    try {
      
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="container"  >
      <h2>React Calculator</h2>
      <div className="results" >
        {input || "0"}
      </div>
      <div  className="keypad" >
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", ".", "0", "=", "+"].map((symbol) => (
          <button
            key={symbol}
            onClick={() => (symbol === "=" ? calculateResult() : handleClick(symbol))}
            className="buttons"
          >
            {symbol}
          </button>
        ))}
        <button
          onClick={clearInput}
          className="buttons2"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Calculator;
