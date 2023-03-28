import React, { PropsWithChildren } from 'react';

import VSeparator from 'components/VSeparator/VSeparator';

import classes from './VTitle.module.scss';

type Props = {
  className?: string;
  title: string;
};

const VTitleView: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) => {
  return (
    <div className={`${classes['text']} ${props.className ?? ''}`}>
      <h2 className={classes['title']}>{props.title}</h2>
      <p className={classes['paragraph']}>{props.children}</p>
      <VSeparator></VSeparator>
    </div>
  );
};

export default VTitleView;
