import React, { PropsWithChildren } from 'react';

import Footer from 'view/Footer/Footer';
import Header from 'view/Header/Header';

import classes from './MainLayout.module.scss';

type Props = {};

const MainLayoutView: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) => {
  return (
    <div className={classes['container']}>
      <Header></Header>
      <div className={classes['content']}>{props.children}</div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayoutView;
