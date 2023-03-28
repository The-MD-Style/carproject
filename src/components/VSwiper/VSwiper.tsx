import React from 'react';

import VSwiperView from './VSwiper.view';

import { AutoplayOptions, NavigationOptions, PaginationOptions, SwiperModule, SwiperOptions } from 'swiper/types';

type Props = {
  isCard?: boolean;
  slidesPerView: number;
  loop?: boolean;
  autoplay?: AutoplayOptions;
  pagination?: PaginationOptions;
  navigation?: NavigationOptions | boolean;
  modules?: SwiperModule[];
  effect?: SwiperOptions['effect'];
  className?: string;
  spaceBetween?: number;
};

const VSwiper: React.FC<React.PropsWithChildren<Props>> = (props: React.PropsWithChildren<Props>) => {
  return (
    <VSwiperView
      slidesPerView={props.slidesPerView}
      loop={props.loop}
      autoplay={props.autoplay}
      pagination={props.pagination}
      navigation={props.navigation}
      modules={props.modules}
      effect={props.effect}
      className={props.className}
      spaceBetween={props.spaceBetween}
    >
      {props.children}
    </VSwiperView>
  );
};

export default VSwiper;
