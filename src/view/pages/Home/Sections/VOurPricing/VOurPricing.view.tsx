import React from 'react';

import SectionContainer from 'Containers/SectionContainer/SectionContainer';
import VSwiper from 'components/VSwiper/VSwiper';

import classes from './VOurPricing.module.scss';
import { Autoplay, Pagination } from 'swiper';
import { IPricingCard } from 'models/home.model';
import VOurPricingCards from 'components/VOurPricingCards/VOurPricingCards';

type Props = {
  ourPriceSlide: IPricingCard[];
};

const VOurPricingView: React.FC<Props> = (props: Props) => {
  return (
    <div className={classes['ourPricing']}>
      <SectionContainer className={classes['content']}>
        <h1 className={classes['title']}>Our Pricing Plans</h1>
        <p className={classes['subTitle']}>Fixed price car servicing packages</p>

        <VSwiper
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 5000 }}
          effect="cards"
          className={classes['cardSwiper']}
          pagination={{
            type: 'bullets',
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
        >
          {props.ourPriceSlide.map((item: IPricingCard) => (
            <VOurPricingCards key={item.title} {...item}></VOurPricingCards>
          ))}
        </VSwiper>
      </SectionContainer>
    </div>
  );
};

export default VOurPricingView;
