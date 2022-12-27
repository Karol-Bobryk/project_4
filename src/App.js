import "./App.css";
import Operation from "./components/Operation.jsx";
import { useState, useEffect } from "react";
function App() {
  const [number1, setnumber1] = useState();
  const [number2, setnumber2] = useState();
  const [order, setOrder] = useState([]);
  function add() {
    setOrder("+");
  }
  function substract() {
    setOrder("-");
  }
  function divide() {
    //TODO ERROR should appear on display
    setOrder("/");
  }
  function numop(val) {
    number1 ? setnumber2(val) : setnumber1(val);
    order.length() === 3 ? executeOrder(order) : console.log(order.length);
  }
  function executeOrder(arr) {
    switch (arr[1]) {
      case "+":
        setnumber1()
        break;
    }
    setOrder([]);
  }
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Operation
            function={() => {
              add();
            }}
            sign="+"
          />
          <Operation
            function={() => {
              substract();
            }}
            sign="-"
          />
          <Operation
            function={() => {
              divide();
            }}
            sign="/"
          />
        </div>
        <div>
          <Operation
            function={() => {
              numop(1);
            }}
            sign="1"
          />
        </div>
      </header>
    </div>
  );
}

export default App;
