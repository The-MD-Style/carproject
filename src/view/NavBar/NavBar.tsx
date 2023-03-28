import React, { useEffect, useState } from 'react';

import NavBarView from './NavBar.view';

import { fillNavData } from './NavBar.map';

type Props = {};

const TopBar: React.FC<Props> = (props: Props) => {
  const [navBarScrolledState, setNavBarScrolledState] = useState(false);
  const [buttonScrolledState, setButtonScrolledState] = useState(false);

  const handleNavBarScroll = () => {
    const offset = window.scrollY;
    if (offset > 150) {
      setNavBarScrolledState(true);
    } else {
      setNavBarScrolledState(false);
    }
  };
  const handleButtonScoll = () => {
    const offset = window.scrollY;
    if (offset > 550) {
      setButtonScrolledState(true);
    } else {
      setButtonScrolledState(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleNavBarScroll);
    window.addEventListener('scroll', handleButtonScoll);

    return () => {
      window.removeEventListener('scroll', handleNavBarScroll);
      window.removeEventListener('scroll', handleButtonScoll);
    };
  });

  return <NavBarView navBarFixed={navBarScrolledState} buttonShow={buttonScrolledState} navData={fillNavData}></NavBarView>;
};

export default TopBar;
