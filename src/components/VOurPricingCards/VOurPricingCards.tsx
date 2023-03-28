import React from 'react';

import VOurPricingCardsView from './VOurPricingCards.view';

type Props = {
  isDark?: boolean;
  title: string;
  price: number;
  sup: number;
  photo: string;
  description: string;
};

const VOurPricingCards: React.FC<Props> = (props: Props) => {
  return <VOurPricingCardsView {...props}></VOurPricingCardsView>;
};

export default VOurPricingCards;
