import SectionContainer from 'Containers/SectionContainer/SectionContainer';
import classes from './TopBar.module.scss';
import React from 'react';
import TopBarView from './TopBar.view';

type Props = {};

const TopBar: React.FC<Props> = (props: Props) => {
  return <TopBarView></TopBarView>;
};

export default TopBar;
