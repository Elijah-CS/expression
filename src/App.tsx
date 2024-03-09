import React, {useState} from 'react';
import Expression from './expression/Expression';
import {Expr} from './expression/Expression';
import Append from './Append';

function App() {

  const expr: Expr = {
    field: "test",
    operator: "test",
    value: "test"
  }

  function onChange(expr: Expr) {
    console.log(expr);
  }

  const [exprs, setExprs] = useState<React.ReactElement[]>([<Expression key={0} expr={expr} onChange={onChange}/>]);

  function onOr() {
    console.log("Clicked OR");
    setExprs((prev) => [...prev, <div key={prev.length} >OR</div>]);
    setExprs((prev) => [...prev, <Expression key={prev.length} expr={expr} onChange={onChange}/>]);
  }

  function onAnd() {
    console.log("Clicked AND");
    setExprs((prev) => [...prev, <div key={prev.length} >AND</div>]);
    setExprs((prev) => [...prev, <Expression key={prev.length} expr={expr} onChange={onChange}/>]);
  }

  return (
    <div>
      <h2>Build an expression</h2>
      {exprs}
      <Append onOr={onOr} onAnd={onAnd}/>
    </div>
  );
}

export default App;