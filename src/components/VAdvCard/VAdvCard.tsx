import React, { PropsWithChildren } from 'react';
import VAdvCardView from './VAdvCard.view';
import { Icons } from 'assets/icons';

type Props = {
  icons?: Icons;
  name?: string;
};

const VAdvCard: React.FC<Props> = (props: PropsWithChildren<Props>) => {
  return (
    <VAdvCardView icons={'search'} name={'hiu'}>
      {props.children}
    </VAdvCardView>
  );
};

export default VAdvCard;
