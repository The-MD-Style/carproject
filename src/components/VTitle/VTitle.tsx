import React, { PropsWithChildren } from 'react';

import VTitleView from './VTitle.view';

type Props = {
  className?: string;
  title: string;
};

const VTitle: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) => {
  return (
    <VTitleView className={props.className} title={props.title}>
      {props.children}
    </VTitleView>
  );
};

export default VTitle;
