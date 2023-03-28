import React from 'react';
import { Autoplay, Pagination } from 'swiper';

import SectionContainer from 'Containers/SectionContainer/SectionContainer';
import VSwiper from 'components/VSwiper/VSwiper';
import VCoupon from 'components/VCoupon/VCoupon';
import VTable from 'components/VTable/VTable';
import VTitle from 'components/VTitle/VTitle';

import classes from './PricingCoupons.module.scss';
import { ICoupon } from 'models/swiper.model';

type Props = {
  coupons: ICoupon[];
};

const PricingCouponsView: React.FC<Props> = (props: Props) => {
  return (
    <SectionContainer className={classes['PricingCoupons']}>
      <VSwiper
        slidesPerView={3}
        loop={true}
        spaceBetween={0}
        autoplay={{ delay: 5000 }}
        effect="cards"
        className={classes['cardSwiper']}
        pagination={{
          type: 'bullets',
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        {props.coupons.map((item: ICoupon) => (
          <VCoupon key={item.description} {...item}></VCoupon>
        ))}
      </VSwiper>
      <div className={classes['table-conatiner']}>
        <VTitle title="Low Overhead Means Savings for You">
          <p>We are able to negotiate better prices from the auto parts vendors</p>
        </VTitle>
        <VTable></VTable>
      </div>
      <div className={classes['schedule-conatiner']}>
        <p className={classes['backround']}>Schedule</p>
        <p className={classes['title']}>
          Schedule <span>Your Appointment</span> Today
        </p>
        <p className={classes['description']}>Your Automotive Repair & Maintenance Service Specialist</p>
        <p className={classes['number']}>1-800-123-4567</p>
        <button className={classes['button']}>Appoinment</button>
      </div>
    </SectionContainer>
  );
};

export default PricingCouponsView;
