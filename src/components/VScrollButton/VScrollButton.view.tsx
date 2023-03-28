import React from 'react';

import VIcon from 'components/VIcon/VIcon';

import classes from './VScrollButton.module.scss';

type Props = {
  scrollOnClick: () => void;
};

const VScrollButtonView = (props: Props) => {
  return (
    <div className={classes['container']} onClick={props.scrollOnClick}>
      <VIcon className={classes['icon']} name={'upArrow'} width={15}></VIcon>
    </div>
  );
};

export default VScrollButtonView;
