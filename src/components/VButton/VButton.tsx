import React from 'react';

import VButtonView from './VButton.view';

type Props = {
  className?: string;
  padding?: string;
  icon?: JSX.Element;
  type: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const VButton: React.FC<React.PropsWithChildren<Props>> = (props: React.PropsWithChildren<Props>) => {
  return <VButtonView {...props}>{props.children}</VButtonView>;
};

VButton.displayName = 'VButton';

export default VButton;
