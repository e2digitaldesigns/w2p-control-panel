import React, { useState } from "react";
import _map from "lodash/map";
interface IntTest {}

const Test: React.FC<IntTest> = () => {
  const [state, setState] = useState();

  return (
    <>
      <h1>Test</h1>

      {_map(state, (item: any, index) => (
        <div key={index}></div>
      ))}
    </>
  );
};

export default Test;
