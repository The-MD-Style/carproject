import React, { useState } from 'react';
import { NextPage } from 'next';

import TestimonialView from 'view/pages/Testimonials/Testimonials.view';
import { FeetbackSlides } from 'components/VSwiper/VSlider.map';
import { fillFeedback } from 'view/pages/Testimonials/Testimonials.map';

const Testimonials: NextPage = () => {
  const [countState, setCountState] = useState<number>(9);

  const handleMoreClick = () => {
    setCountState(fillFeedback.length + 1 - countState >= 9 ? countState + 9 : countState + fillFeedback.length + 1 - countState);
  };
  const handleReset = () => {
    setCountState(9);
  };

  return (
    <TestimonialView
      swiperData={FeetbackSlides}
      value={countState}
      handleState={handleMoreClick}
      fillFeedback={fillFeedback}
      handleReset={handleReset}
    ></TestimonialView>
  );
};
Testimonials.displayName = 'Testimonials';

export default Testimonials;
