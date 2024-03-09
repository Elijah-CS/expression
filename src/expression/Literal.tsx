import React, { useState } from 'react';

function Literal() {
  const [value, setValue] = useState<string>("");

  return (
    <input value={value} onChange={(e) => setValue(e.currentTarget.value)}/>
  );
}

export default Literal;