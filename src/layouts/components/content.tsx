import React from 'react';

type Props = {
  children: React.ReactNode;
};

function Content({ children }: Props) {
  return <div>{children}</div>;
}

export default Content;
