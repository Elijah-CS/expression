import React from 'react';

interface AppendParams {
  onOr: () => void
  onAnd: () => void
}

const Append: React.FC<AppendParams> = ({onOr, onAnd}) => {

  return (
    <div>
      <button onClick={onOr}>OR</button>
      <button onClick={onAnd}>AND</button>
    </div>
  );
}

export default Append;