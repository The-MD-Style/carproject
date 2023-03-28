import React from 'react';
import { EffectFade, Navigation, Pagination } from 'swiper';

import VBreackdownService from 'components/VBreackdownService/VBreackdownService';
import VSwiper from 'components/VSwiper/VSwiper';
import VCustomerReviews from 'components/VSwiper/VCustomerReviews/VCustomerReviews';

import photo from 'assets/images/backgrounds/HomeSliderRew/testimonials02_img01.jpg';
import { ICustomerReviews, IReviews } from 'models/home.model';
import classes from './VReviews.module.scss';

type Props = {
  reviewsData: IReviews[];
  customerReviews: ICustomerReviews[];
};

const VReviewsView: React.FC<Props> = (props: Props) => {
  return (
    <div className={classes['container']}>
      <div className={classes['wrapper']}>
        <div className={classes['stats']}>
          {props.reviewsData.map((item: IReviews) => (
            <div key={item.title} className={classes['item']}>
              <p className={classes['text']}>{item.number}</p>
              <span className={classes['title']}>{item.title}</span>
            </div>
          ))}
        </div>
      </div>
      <VSwiper
        slidesPerView={1}
        loop={true}
        effect="fade"
        navigation={true}
        modules={[EffectFade, Navigation, Pagination]}
        className={classes['sliderClass']}
      >
        {props.customerReviews.map((item: ICustomerReviews, index: number) => (
          <VCustomerReviews
            key={item.image}
            curentPage={index + 1}
            function={item.function}
            image={photo.src}
            stars={item.stars}
            pages={props.customerReviews.length}
            name={item.name}
          >
            {item.text}
          </VCustomerReviews>
        ))}
      </VSwiper>
      <VBreackdownService></VBreackdownService>
    </div>
  );
};

export default VReviewsView;
