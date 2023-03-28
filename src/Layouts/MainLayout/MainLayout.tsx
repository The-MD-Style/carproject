import { loadDefaultErrorComponents } from 'next/dist/server/load-components';
import React, { PropsWithChildren } from 'react';

import MainLayoutView from './MainLayout.view';

type Props = {};

const MainLayout: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) => {
  return <MainLayoutView>{props.children}</MainLayoutView>;
};

MainLayout.displayName = 'MainLayout';

export default MainLayout;
