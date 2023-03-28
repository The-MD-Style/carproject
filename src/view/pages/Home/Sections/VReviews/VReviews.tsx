import React from 'react';

import VReviewsView from './VReviews.view';

import { ICustomerReviews, IReviews } from 'models/home.model';

type Props = {
  reviewsData: IReviews[];
  slideData: ICustomerReviews[];
};

const VReviews: React.FC<Props> = (props: Props) => {
  return <VReviewsView reviewsData={props.reviewsData} customerReviews={props.slideData}></VReviewsView>;
};

export default VReviews;
