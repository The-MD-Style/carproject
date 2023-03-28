import React from 'react';

import VOurPricingView from './VOurPricing.view';
import { IPricingCard } from 'models/home.model';

type Props = {
  ourPriceSlide: IPricingCard[];
};

const VOurPricing: React.FC<Props> = (props: Props) => {
  return <VOurPricingView ourPriceSlide={props.ourPriceSlide}></VOurPricingView>;
};

export default VOurPricing;
