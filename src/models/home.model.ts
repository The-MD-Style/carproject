import { Icons } from 'assets/icons';
import React from 'react';

export type IService = {
  iconName: Icons;
  title: string;
};

export type ISlide = {
  content: JSX.Element | React.FC;
};

export type IWidget = {
  name: string;
  content?: string;
  decoration: string;
};

export type IHomeTab = {
  id: string;
  title: string;
  icon: Icons;
};

export type ITab = {
  id: string;
  tab: JSX.Element;
};

export type IPricingCard = {
  isDark?: boolean;
  title: string;
  price: number;
  sup: number;
  photo: string;
  description: string;
};

export type ICounter = {
  value: string;
  text: string;
};

export type ICars = {
  photo: string;
};
export type IFeaturedData = {
  name: string;
  description: string;
};

export type IReviews = {
  title: string;
  number: string | number;
};

export type ICustomerReviews = {
  function: string;
  image: string;
  stars: number;
  name: string;
  text: string;
};
