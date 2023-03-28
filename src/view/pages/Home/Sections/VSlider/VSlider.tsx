import React from 'react';

import VSliderView from './VSlider.view';

import { IShowcaseSlide } from 'models/swiper.model';

type Props = {
  showcaseSlides: IShowcaseSlide[];
};

const VSlider: React.FC<Props> = (props: Props) => {
  return <VSliderView showcaseSlides={props.showcaseSlides}></VSliderView>;
};

export default VSlider;
