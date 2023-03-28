import React from 'react';
import { useRouter } from 'next/router';

import VHeaderView from './VHeader.view';

import { IPath } from 'models/path.model';

type Props = {};

const VHeader: React.FC<Props> = (props: Props) => {
  const route = useRouter();

  const paths = route.pathname.split('/');
  paths.shift();

  const result: IPath[] = paths.map((path, index, paths) => {
    return {
      href: `/${paths.slice(0, index + 1).join('/')}`,
      name: path.replace('-', ' ').replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase()),
    };
  });

  return <VHeaderView paths={result}></VHeaderView>;
};

export default VHeader;
