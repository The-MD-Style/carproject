import React from 'react';
import Image from 'next/image';

import VButtonLink from 'components/VButtonLink/VButtonLink';

import classes from './VOurPricingCards.module.scss';
import { photoSrc } from './VOurPricingCards.map';
import bg from 'assets/images/backgrounds/ourPricingBg.png';
type Props = {
  isDark?: boolean;
  title: string;
  price: number;
  sup: number;
  photo: string;
  description: string;
};

const VOurPricingCardsView = (props: Props) => {
  return (
    <div className={`${classes['card']} ${props.isDark ? classes['cardDark'] : ''}`}>
      <p className={classes['title']}>{props.title}</p>
      <p className={`${classes['price']} ${props.isDark && classes['priceDark']}`}>
        ${props.price} <sup className={classes['sup']}>{props.sup}</sup>
      </p>
      <div className={classes['bgPhoto']}>
        <Image className={classes['photo']} src={bg.src} alt="photo" height={230} width={369} />
      </div>
      <Image
        className={classes['photo']}
        src={photoSrc.find((item) => item.name === props.photo).image}
        alt="photo"
        height={230}
        width={369}
      />
      <p className={classes['description']}>{props.description}</p>
      <VButtonLink className={`${classes['btn']} ${props.isDark && classes['btnDark']}`} href={'#'}>
        More Info
      </VButtonLink>
    </div>
  );
};

export default VOurPricingCardsView;
