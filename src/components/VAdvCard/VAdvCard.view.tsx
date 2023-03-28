import React, { PropsWithChildren } from 'react';

import classes from './VAdvCard.module.scss';
import { Icons } from 'assets/icons';

type Props = {
  icons: Icons;
  name: string;
};

const VAdvCardView: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) => {
  return (
    <div className={classes['container']}>
      <div className={classes['block']}></div>
    </div>
  );
};

export default VAdvCardView;
