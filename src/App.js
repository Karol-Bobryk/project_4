import "./App.css";
import Operation from "./components/Operation.jsx";
import { useState, useEffect } from "react";
function App() {
  const [number1, setNumber1] = useState(0);
  const [order, setOrder] = useState([]);
  const [display, setDisplay] = useState("");

  const AssignNumber = (val) => {
    setDisplay(display + val);
  };
  const AssignOperation = (num, val) => {
    setNumber1(num);
    setOrder(order.concat([num, val]));
    setDisplay("");
  };
  const EqualOperation = () => {
    switch (order[1]) {
      case "+":
        setDisplay(+order[0] + +display);
        break;
      case "-":
        setDisplay(+order[0] - +display);
        break;
      case "/":
        setDisplay(+order[0] / +display);
        break;
      case "^":
        setDisplay((+order[0]) ** +display);
        break;
      case "√":
        setDisplay(Math.sqrt(+order[0]));
        break;
      default:
        setDisplay("ERR");
    }
    setNumber1(+display);
  };
  useEffect(() => {
    console.log(display);
  }, [display]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>{display}</h1>
        <div>
          <div>
            <Operation sign="1" function={() => AssignNumber(1)} />
            <Operation sign="2" function={() => AssignNumber(2)} />
            <Operation sign="3" function={() => AssignNumber(3)} />
            <Operation
              sign="+"
              function={() => AssignOperation(display, "+")}
            />
          </div>
          <Operation sign="4" function={() => AssignNumber(4)} />
          <Operation sign="5" function={() => AssignNumber(5)} />
          <Operation sign="6" function={() => AssignNumber(6)} />
          <Operation sign="-" function={() => AssignOperation(display, "-")} />
          <div>
            <Operation sign="7" function={() => AssignNumber(7)} />
            <Operation sign="8" function={() => AssignNumber(8)} />
            <Operation sign="9" function={() => AssignNumber(9)} />
            <Operation
              sign="/"
              function={() => AssignOperation(display, "/")}
            />
          </div>
          <Operation sign="0" function={() => AssignNumber(0)} />
          <Operation sign="^" function={() => AssignOperation(display, "^")} />
          <Operation sign="√" function={() => AssignOperation(display, "√")} />
          <Operation sign="=" function={() => EqualOperation()} />
        </div>
      </header>
    </div>
  );
}

export default App;
