import React from 'react';

import VProvideExpertService from './Sections/VProvideExpertService/VProvideExpertService';
import VOurFeaturedServices from './Sections/VOurFeaturedServices/VOurFeaturedServices';
import VOurPricing from './Sections/VOurPricing/VOurPricing';
import VReviews from './Sections/VReviews/VReviews';
import VWidgets from './Sections/VWidgets/VWidgets';
import VBrands from './Sections/VBrands/VBrands';
import VSlider from './Sections/VSlider/VSlider';

import {
  ICustomerReviews,
  IFeaturedData,
  IPricingCard,
  IHomeTab,
  IReviews,
  ICounter,
  IService,
  IWidget,
  ICars,
  ITab,
} from 'models/home.model';

import { IShowcaseSlide } from 'models/swiper.model';
import classes from './Home.module.scss';

type Props = {
  customerReviews: ICustomerReviews[];
  showcaseSlides: IShowcaseSlide[];
  FeaturedData: IFeaturedData[];
  ourPriceSlide: IPricingCard[];
  homePageTabs: IHomeTab[];
  reviewsData: IReviews[];
  serviceMap: IService[];
  counterMap: ICounter[];
  carsFillData: ICars[];
  widgetMap: IWidget[];
  homeTabs: ITab[];
};

const HomeWiew: React.FC<Props> = (props: Props) => {
  return (
    <div className={classes['bg']}>
      <VSlider showcaseSlides={props.showcaseSlides}></VSlider>
      <VOurFeaturedServices serviceMap={props.serviceMap} IFeaturedData={props.FeaturedData}></VOurFeaturedServices>
      <VProvideExpertService homePageTabs={props.homePageTabs} homeTabs={props.homeTabs}></VProvideExpertService>
      <VWidgets widgetMap={props.widgetMap}></VWidgets>
      <VReviews reviewsData={props.reviewsData} slideData={props.customerReviews}></VReviews>
      <VOurPricing ourPriceSlide={props.ourPriceSlide}></VOurPricing>
      <VBrands carsFillData={props.carsFillData}></VBrands>
    </div>
  );
};

export default HomeWiew;
