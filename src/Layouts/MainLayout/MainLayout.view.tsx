import React, { PropsWithChildren } from 'react';

import Header from 'view/Header/Header';
import Footer from 'view/Footer/Footer';
import VHeader from 'components/VHeader/VHeader';

import classes from './MainLayout.module.scss';

type Props = {};

const MainLayoutView: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) => {
  return (
    <div className={classes['container']}>
      <Header />
      <VHeader />
      <div className={classes['content']}>{props.children}</div>
      <Footer />
    </div>
  );
};

export default MainLayoutView;
