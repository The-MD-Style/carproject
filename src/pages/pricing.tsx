import React from 'react';

import { CouponsCard } from 'components/VSwiper/VSlider.map';
import PricingCouponsView from 'view/pages/PricingCoupons/PricingCoupons.view';
import { NextPage } from 'next';

type Props = {};

const PricingCoupons: NextPage = () => {
  return <PricingCouponsView coupons={CouponsCard}></PricingCouponsView>;
};

export default PricingCoupons;
