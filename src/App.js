import "./App.css";
import Operation from "./components/Operation.jsx";
import { useState, useEffect } from "react";
function App() {
  const [number1, setnumber1] = useState();
  const [number2, setnumber2] = useState();
  const [order, setOrder] = useState([]);
  const [disp, setDisp] = useState("");

  const AssignNumber = (val) => {
    setDisp(disp + val);
  };
  const AssignOperation = (val) => {
    setnumber1(+disp);
    setOrder(number1);
  };
  return (
    <div className="App">
      <header className="App-header">
        {disp}
        <div>
          <Operation sign="1" function={() => AssignNumber(1)} />
          <Operation sign="2" function={() => AssignNumber(2)} />
          <Operation sign="3" function={() => AssignNumber(3)} />
          <Operation sign="+" function={() => AssignOperation("+")} />
        </div>
      </header>
    </div>
  );
}

export default App;
