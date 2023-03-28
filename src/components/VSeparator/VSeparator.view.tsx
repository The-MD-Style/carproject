import React from 'react';

import classes from './VSeparator.module.scss';

type Props = {};

const VSeparatorView: React.FC<Props> = (props: Props) => {
  return <span className={classes['separator']}></span>;
};

export default VSeparatorView;
