import React, { PropsWithChildren } from 'react';

import VButtonLinkView from './VButtonLink.view';

type Props = { href: string; className?: string };

const VButtonLink: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) => {
  return (
    <VButtonLinkView className={props.className} href={props.href}>
      {props.children}
    </VButtonLinkView>
  );
};

export default VButtonLink;
