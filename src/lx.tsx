import * as React from 'react';

interface Props {
  str: string
};

export const FCCounter: React.FC<Props> = props => {
  const { str } = props;

  return (
    <div>
      {str}
    </div>
  );
};
