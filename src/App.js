import "./App.css";
import Operation from "./components/Operation.jsx";
import { useState } from "react";
function App() {
  const [number1, setnumber1] = useState();
  const [number2, setnumber2] = useState();

  async function add() {
    numop.then(() => {});

    console.log(number1);
    console.log(number2);
    setnumber1(number1 + number2);
    console.log(number1);
  }
  function substract() {
    setnumber1(number1 - number2);
    console.log(number1);
  }
  function divide() {
    //TODO ERROR should appear on display
    number2 !== 0 ? setnumber1(number1 / number2) : console.log("ERROR");
  }
  function numop(val) {
    return new Promise((resolve, reject) => {
      console.log("eyo");
      if (number1) {
        setnumber2(val);
        resolve("Done");
      } else {
        setnumber1(val);
      }
    });
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
