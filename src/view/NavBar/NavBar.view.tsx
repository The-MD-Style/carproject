import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import SectionContainer from 'Containers/SectionContainer/SectionContainer';
import VButton from 'components/VButton/VButton';
import { INavData } from 'models/Nav.model';
import VIcon from 'components/VIcon/VIcon';

import classes from './NavBar.module.scss';
import logo from 'assets/images/logo.png';
import VScrollButton from 'components/VScrollButton/VScrollButton';

type Props = {
  navData: INavData[];
  buttonShow: boolean;
  navBarFixed: boolean;
};

const NavBarView: React.FC<Props> = (props: Props) => {
  return (
    <SectionContainer isContained className={`${classes['container']} ${props.navBarFixed ? classes['scrolled'] : ''}`}>
      <nav className={`${classes['nav']} `}>
        <div className={classes['logo']}>
          <Link href={'/'}>
            <Image className={classes['logoImg']} src={logo.src} alt="logo" height={79.1} width={234.3} />
          </Link>
        </div>
        <ul className={classes['links']}>
          {props.navData.map((item: INavData) => (
            <li className={classes['item']} key={item.link}>
              <Link href={item.link}>
                <a className={classes['text']}>{item.name}</a>
              </Link>
            </li>
          ))}
        </ul>
        <div className={classes['icons']}>
          <VButton className={classes['search']} type="submit">
            <VIcon width={17} height={17} name="search"></VIcon>
          </VButton>
          <VButton className={classes['cart']} type="button">
            <VIcon width={23} height={23} name="cart"></VIcon>
          </VButton>
        </div>
      </nav>

      {props.buttonShow ? <VScrollButton></VScrollButton> : ''}
    </SectionContainer>
  );
};

export default NavBarView;
