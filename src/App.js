import Operation from "./components/Operation.jsx";
import { useState, useEffect } from "react";
function App() {
  const [order, setOrder] = useState([]);
  const [display, setDisplay] = useState("");

  const AssignNumber = (val) => {
    setDisplay(display + val);
  };
  const AssignOperation = (num, val) => {
    order[1] ? setOrder([order[0], val]) : setOrder(order.concat([num, val]));
    setDisplay("");
  };
  const clearState = () => {
    setOrder([]);
    setDisplay("");
  };
  useEffect(() => {
    console.log(order);
  }, [order]);
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
      case "*":
        setDisplay(+order[0] * +display);
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
    setOrder([]);
    console.log(order);
  };
  return (
    <div className="h-screen bg-neutral-800 text-slate-300 flex flex-col justify-center items-center">
      <div className="w-fit">
        <div className="p-1 h-20 text-right text-2xl border border-violet-600 rounded-lg">
          {display}
        </div>
        <div className="">
          <div className="">
            <Operation
              sign="C"
              operationStyle={true}
              function={() => {
                clearState();
              }}
            />
            <Operation
              sign="^"
              operationStyle={true}
              function={() => AssignOperation(display, "^")}
            />
            <Operation
              sign="√"
              operationStyle={true}
              function={() => AssignOperation(display, "√")}
            />
            <Operation
              sign="+"
              operationStyle={true}
              function={() => AssignOperation(display, "+")}
            />
          </div>

          <div className="">
            <Operation sign="7" function={() => AssignNumber(7)} />
            <Operation sign="8" function={() => AssignNumber(8)} />
            <Operation sign="9" function={() => AssignNumber(9)} />
            <Operation
              sign="/"
              operationStyle={true}
              function={() => AssignOperation(display, "/")}
            />
          </div>
          <div className="">
            <Operation sign="4" function={() => AssignNumber(4)} />
            <Operation sign="5" function={() => AssignNumber(5)} />
            <Operation sign="6" function={() => AssignNumber(6)} />
            <Operation
              sign="x"
              operationStyle={true}
              function={() => AssignOperation(display, "*")}
            />
          </div>
          <div className="">
            <Operation sign="1" function={() => AssignNumber(1)} />
            <Operation sign="2" function={() => AssignNumber(2)} />
            <Operation sign="3" function={() => AssignNumber(3)} />
            <Operation
              sign="-"
              operationStyle={true}
              function={() => AssignOperation(display, "-")}
            />
          </div>
          <div className="text-end">
            <Operation sign="0" function={() => AssignNumber(0)} />
            <Operation
              sign="="
              operationStyle={true}
              function={() => EqualOperation()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
