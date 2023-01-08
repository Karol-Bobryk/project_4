import React from "react";
function Operation(props) {
  return (
    <button
      className={
        props.operationStyle
          ? "p-1 m-2 w-20 border border-violet-600 rounded-lg bg-violet-600 hover:bg-violet-900 hover:border-violet-900"
          : "p-1 m-2 w-20 border border-violet-600 rounded-lg hover:border-violet-900"
      }
      onClick={props.function}
    >
      {props.sign}
    </button>
  );
}
export default Operation;
