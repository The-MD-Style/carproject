import React from 'react';
import { EffectFade, Navigation, Pagination } from 'swiper';

import VSwiper from 'components/VSwiper/VSwiper';

import classes from './VSlider.module.scss';
import ShowcaseSlide from 'components/VSwiper/VShowcaseSlide/ShowcaseSlide';
import { IShowcaseSlide } from 'models/swiper.model';

type Props = {
  showcaseSlides: IShowcaseSlide[];
};

const VSliderView = (props: Props) => {
  return (
    <VSwiper
      slidesPerView={1}
      loop={true}
      effect="fade"
      navigation={true}
      className={classes['slider']}
      modules={[EffectFade, Navigation, Pagination]}
    >
      {props.showcaseSlides.map((item: IShowcaseSlide) => (
        <ShowcaseSlide key={item.showcase} title={item.title} showcase={item.showcase} text={item.text} back={item.back}></ShowcaseSlide>
      ))}
    </VSwiper>
  );
};

export default VSliderView;
