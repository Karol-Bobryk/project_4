import "./App.css";
import Operation from "./components/Operation.jsx";
import { useState, useEffect } from "react";
function App() {
  const [number1, setnumber1] = useState(0);
  const [number2, setnumber2] = useState(0);
  const [order, setOrder] = useState([]);
  const [disp, setDisp] = useState("");

  const AssignNumber = (val) => {
    setDisp(disp + val);
    console.log(disp);
  };
  const AssignOperation = (num, val) => {
    setnumber1(num);
    setOrder(num);
    setOrder(order.concat(val));
    setDisp("");
    console.log(number1 + " " + val);
  };
  return (
    <div className="App">
      <header className="App-header">
        {disp}
        <div>
          <Operation sign="1" function={() => AssignNumber(1)} />
          <Operation sign="2" function={() => AssignNumber(2)} />
          <Operation sign="3" function={() => AssignNumber(3)} />
          <Operation sign="+" function={() => AssignOperation(disp, "+")} />
        </div>
      </header>
    </div>
  );
}

export default App;
