import React, { useState } from "react";

const Child = ({ handleChanges }) => {
  const [first, setFirst] = useState("test");

  return (
    <div
      onClick={() => {
        handleChanges(2);
        setFirst("it changes");
      }}
    >
      {first}
    </div>
  );
};

export default Child;
