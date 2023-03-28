import React, { useState } from 'react';
import { Autoplay, Pagination } from 'swiper';

import VFeedbackSlide from 'components/VSwiper/VFeedbackSlide/VFeedbackSlide';
import SectionContainer from 'Containers/SectionContainer/SectionContainer';
import VFeedback from 'components/VFeedback/VFeedback';
import VButton from 'components/VButton/VButton';
import VSwiper from 'components/VSwiper/VSwiper';
import VTitle from 'components/VTitle/VTitle';

import { IFeedback } from 'models/testimonials.model';
import { IFeetbackSlides } from 'models/swiper.model';
import classes from './Testimonials.module.scss';

type Props = {
  swiperData: IFeetbackSlides[];
  fillFeedback: IFeedback[];
  value: number;
  handleState: () => void;
  handleReset: () => void;
};

const TestimonialView = (props: Props) => {
  return (
    <SectionContainer className={classes['container']}>
      <VSwiper
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 10000 }}
        effect="cards"
        className={classes['slideSwiper']}
        pagination={{
          type: 'bullets',
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        {props.swiperData.map((item: IFeetbackSlides) => (
          <VFeedbackSlide key={item.image} {...item}></VFeedbackSlide>
        ))}
      </VSwiper>

      <VTitle title={'What Our Clients Say'}>Heres what our customers have to say about Car Repair Service</VTitle>
      <div className={classes['content']}>
        {props.fillFeedback.slice(0, props.value).map((item: IFeedback, index: number) => (
          <VFeedback
            isDark={!(index % 2)}
            key={item.name}
            text={item.text}
            name={item.name}
            function={item.function}
            image={item.image}
          ></VFeedback>
        ))}
      </div>

      <VButton
        className={classes['btn']}
        type={'submit'}
        onClick={!(props.fillFeedback.length + 1 === props.value) ? props.handleState : props.handleReset}
      >
        {!(props.fillFeedback.length + 1 === props.value) ? 'More Testimonials' : 'Show less'}
      </VButton>
    </SectionContainer>
  );
};

export default TestimonialView;
