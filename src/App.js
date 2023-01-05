import "./App.css";
import Operation from "./components/Operation.jsx";
import { useState, useEffect } from "react";
function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [order, setOrder] = useState([]);
  const [display, setDisplay] = useState("");

  function AssignNumber(val) {
    setDisplay(display + val);
  }
  const AssignOperation = (num, val) => {
    setNumber1(num);
    setOrder(num);
    setOrder(order.concat(val));
    setDisplay("");
  };
  useEffect(() => {
    console.log(display);
  }, [display]);
  return (
    <div className="App">
      <header className="App-header">
        {display}
        <div>
          <Operation sign="1" function={() => AssignNumber(1)} />
          <Operation sign="2" function={() => AssignNumber(2)} />
          <Operation sign="3" function={() => AssignNumber(3)} />
          <Operation sign="+" function={() => AssignOperation(display, "+")} />
          <Operation sign="=" function={() => AssignOperation(display, "+")} />
        </div>
      </header>
    </div>
  );
}

export default App;
