import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { AutoplayOptions, NavigationOptions, PaginationOptions, SwiperModule, SwiperOptions } from 'swiper/types';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import classes from './VSwiper.module.scss';

type Props = {
  loop?: boolean;
  className?: string;
  slidesPerView: number;
  modules?: SwiperModule[];
  spaceBetween?: number;
  autoplay?: AutoplayOptions;
  pagination?: PaginationOptions;
  effect?: SwiperOptions['effect'];
  navigation?: NavigationOptions | boolean;
};

const VSwiperView: React.FC<React.PropsWithChildren<Props>> = (props: React.PropsWithChildren<Props>) => {
  return (
    <Swiper
      slidesPerView={props.slidesPerView}
      effect={props.effect}
      spaceBetween={props.spaceBetween}
      loop={props.loop}
      modules={props.modules}
      autoplay={props.autoplay}
      navigation={props.navigation}
      pagination={props.pagination}
      className={`${props.className ?? classes['swiper']}`}
    >
      {React.Children.map(props.children, (child) => (
        <SwiperSlide>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default VSwiperView;
