import React from 'react';

import VTabTitleView from './VTabTitle.view';

import { Icons } from 'assets/icons';

type Props = {
  isActive: boolean;
  icon: Icons;
  title: string;
  onClick?: () => void;
};

const VTabTitle: React.FC<Props> = (props: Props) => {
  return <VTabTitleView isActive={props.isActive} icon={props.icon} title={props.title} onClick={props.onClick}></VTabTitleView>;
};

export default VTabTitle;
