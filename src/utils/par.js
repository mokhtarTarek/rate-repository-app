import React, { useState } from "react";
import Child from "./child";

const Par = () => {
  const [parentState, setParentState] = useState("parent state");
  const handle = (arg) => {
    setParentState(arg);
  };

  return (
    <>
      <div>{parentState} </div>
      <Child handleChanges={handle} />
    </>
  );
};

export default Par;
