import React, { PropsWithChildren } from 'react';

import VContactElementView from './VContactElement.view';

import { Icons } from 'assets/icons';

type Props = {
  icon: Icons;
  title: string;
};

const VContactElement: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) => {
  return (
    <VContactElementView icon={props.icon} title={props.title}>
      {props.children}
    </VContactElementView>
  );
};

export default VContactElement;
