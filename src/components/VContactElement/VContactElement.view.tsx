import React, { PropsWithChildren } from 'react';

import classes from './VContactElement.module.scss';
import VIcon from 'components/VIcon/VIcon';

import { Icons } from 'assets/icons';

type Props = {
  icon: Icons;
  title: string;
};

const VContactElementView: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) => {
  return (
    <React.Fragment>
      <div className={classes['container']}>
        <VIcon name={props.icon} className={classes['icon']} width={24} height={24}></VIcon>
        <p className={classes['title']}>{props.title}</p>
        <div className={classes['text']}>{props.children}</div>
      </div>
    </React.Fragment>
  );
};

export default VContactElementView;
