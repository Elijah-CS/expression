import React from 'react';
import Literal from './Literal';
import Operator from './Operator';
import Constant from './Constant';

interface ExpressionParams {
  expr: Expr,
  onChange: (expr: Expr) => void
}

export interface Expr {
  field: string,
  operator: string,
  value: string
}

const Expression: React.FC<ExpressionParams> = ({expr, onChange}) => {

  return (
    <div>
      <Constant /> <Operator /> <Literal />
    </div>
  );
}

export default Expression;