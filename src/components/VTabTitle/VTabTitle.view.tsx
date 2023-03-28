import React from 'react';

import VIcon from 'components/VIcon/VIcon';
import classes from './VTabTitle.module.scss';

import { Icons } from 'assets/icons';

type Props = {
  icon: Icons;
  isActive: boolean;
  title: string;
  onClick?: () => void;
};

const VTabTitleView: React.FC<Props> = (props: Props) => {
  return (
    <div className={`${classes['wrapper']} ${props.isActive ? classes['activeTab'] : ''}`} onClick={props.onClick}>
      <VIcon name={props.icon} width={55} height={55}></VIcon>
      <p className={classes['text']}>{props.title}</p>
    </div>
  );
};

export default VTabTitleView;
