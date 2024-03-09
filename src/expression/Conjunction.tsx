import React, { useState } from 'react';

function Conjunction() {
  const [value, setValue] = useState<string>("==");

  return (
    <select name="conjunctions" id="conjunctions">
      <option value="and">{"AND"}</option>
      <option value="or">{"OR"}</option>
    </select>
  );
}

export default Conjunction;