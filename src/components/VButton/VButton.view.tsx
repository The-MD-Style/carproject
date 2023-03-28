import React from 'react';

import classes from './VButton.module.scss';

type Props = {
  className?: string;
  padding?: string;
  icon?: JSX.Element;
  type: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const VButtonView: React.FC<React.PropsWithChildren<Props>> = (props: React.PropsWithChildren<Props>) => {
  return (
    <button
      style={{ padding: `${props.padding}` }}
      className={`${classes['wrapper']} ${props.className ?? ''}`}
      type={props.type}
      onClick={props.onClick}
    >
      {props.icon}
      {props.children}
    </button>
  );
};

VButtonView.displayName = 'VButtonView';

export default VButtonView;
