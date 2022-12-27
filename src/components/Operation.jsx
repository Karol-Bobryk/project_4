import React from "react";
function Operation(props) {
  return <button onClick={props.function}>{props.sign}</button>;
}
export default Operation;
