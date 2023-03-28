import React, { PropsWithChildren } from 'react';
import Link from 'next/link';

import classes from './VButtonLink.module.scss';

type Props = { href: string; className?: string };

const VButtonLinkView: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) => {
  return (
    <Link href={props.href}>
      <a className={`${classes['link']} ${props.className ?? ''}`}>{props.children}</a>
    </Link>
  );
};

export default VButtonLinkView;
