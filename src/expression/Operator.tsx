import React, { useState } from 'react';

function Operator() {
  const [value, setValue] = useState<string>("==");

  return (
    <select name="operators" id="operators">
      <option value="eq">{"=="}</option>
      <option value="neq">{"!="}</option>
      <option value="gt">{">"}</option>
      <option value="gte">{">="}</option>
      <option value="lt">{"<"}</option>
      <option value="lte">{"<="}</option>
    </select>
  );
}

export default Operator;