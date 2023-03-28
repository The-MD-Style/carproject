import React, { PropsWithChildren } from 'react';
import VCustomerReviewsView from './VCustomerReviews.view';

type Props = {
  curentPage: number;
  function: string;
  image: string;
  stars: number;
  pages: number;
  name: string;
};

const VCustomerReviews: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) => {
  return <VCustomerReviewsView {...props}>{props.children}</VCustomerReviewsView>;
};

export default VCustomerReviews;
