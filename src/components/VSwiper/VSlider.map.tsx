import back1 from 'assets/images/backgrounds/sliderBackground1.jpg';
import back2 from 'assets/images/backgrounds/sliderBackground2.jpg';
import { ICustomerReviews, IPricingCard, ISlide } from 'models/home.model';
import man from '../../assets/images/backgrounds/man.jpg';
import photo from 'assets/images/backgrounds/HomeSliderRew/testimonials02_img01.jpg';
import { ICoupon, IFeetbackSlides, IShowcaseSlide } from 'models/swiper.model';

export const showcaseSlides: IShowcaseSlide[] = [
  {
    back: back1.src,
    title: 'Offer Fast',
    showcase: 'Reliable Service',
    text: 'Over 35 Years Of Quality Auto Service',
  },
  {
    back: back2.src,
    title: 'Multi-Point v bd',
    showcase: 'Vehicle Inspection',
    text: 'No-charge start, Stop and Steering check',
  },
];

export const HomeOurPriceSlide: IPricingCard[] = [
  {
    title: 'Synthetic Blend Oil Change',
    price: 24,
    sup: 99,
    photo: 'oil',
    description: 'Includes oil filter, up to 5 qts of synthetic blend oil, complete inspection.',
  },
  {
    title: 'Wheel Alignment Special',
    price: 59,
    isDark: true,
    sup: 99,
    photo: 'wheel',
    description: 'Includes oil filter, up to 5 qts of synthetic blend oil, complete inspection.',
  },
  {
    title: 'Engine Coolant Inspection',
    price: 24,
    sup: 99,
    photo: 'engine',
    description: 'Includes oil filter, up to 5 qts of synthetic blend oil, complete inspection.',
  },
  {
    title: 'Brake Fluid Flush Service',
    price: 24,
    sup: 99,
    photo: 'brakes',
    description: 'Includes oil filter, up to 5 qts of synthetic blend oil, complete inspection.',
  },
  {
    title: 'Internal Transmission Repair',
    price: 24,
    sup: 99,
    photo: 'transmisie',
    description: 'Includes oil filter, up to 5 qts of synthetic blend oil, complete inspection.',
  },
];

export const customerReviews: ICustomerReviews[] = [
  {
    function: 'Manager',
    image: photo.src,
    name: 'Silvia R. Brown',
    stars: 5,
    text: 'I took my car there to get fixed after I was hit and my rear upper controler arm was bent. They gave me the best estimate, and had the work done super quick! The customer service was amazing, and they were very polite and knowledgable!',
  },
  {
    function: 'Electrician',
    image: photo.src,
    name: 'Jeffrey Holton',
    stars: 5,
    text: 'I would recommend Car Repair Service to anyone without a doubt! Very professional and reliable. The best customer service and reasonable prices. My go to auto shop from now on!!!',
  },
  {
    function: 'Electrician',
    image: photo.src,
    name: 'Jeffrey Holton',
    stars: 5,
    text: 'I would recommend Car Repair Service to anyone without a doubt! Very professional and reliable. The best customer service and reasonable prices. My go to auto shop from now on!!!',
  },
  {
    function: 'Electrician',
    image: photo.src,
    name: 'Jeffrey Holton',
    stars: 5,
    text: 'I would recommend Car Repair Service to anyone without a doubt! Very professional and reliable. The best customer service and reasonable prices. My go to auto shop from now on!!!',
  },
  {
    function: 'DeLaDetDom',
    image: photo.src,
    name: 'Silvia R. Brown',
    stars: 1,
    text: 'I took my car there to get fixed after I was hit and my rear upper controler arm was bent. They gave me the best estimate, and had the work done super quick! The customer service was amazing, and they were very polite and knowledgable!',
  },
];

export const FeetbackSlides: IFeetbackSlides[] = [
  {
    text: 'I took my car there to get fixed after I was hit and my rear upper controler arm was bent. They gave me the best estimate, and had the work done super quick! The customer service was amazing, and they were very polite and knowledgable!',
    image: man.src,
    name: 'Arnold C. Robenson',
  },
  {
    text: 'I took my car there to get fixed after I was hit and my rear upper controler arm was bent. They gave me the best estimate, and had the work done super quick! The customer service was amazing, and they were very polite and knowledgable!',
    image: man.src,
    name: 'Arnold C. Robenson',
  },
  {
    text: 'I took my car there to get fixed after I was hit and my rear upper controler arm was bent. They gave me the best estimate, and had the work done super quick! The customer service was amazing, and they were very polite and knowledgable!',
    image: man.src,
    name: 'Arnold C. Robenson',
  },
];

export const CouponsCard: ICoupon[] = [
  {
    value_off: 15,
    type: 'Maintanance!',
    title: 'Standart Oil Change',
    description: 'Present this coupon and receive $15 OFF Standart Oil Change',
    monocrome: true,
  },
  {
    value_off: 10,
    type: 'Maintanance!',
    title: 'Standart Oil Change',
    description: 'Present this coupon and receive $15 OFF Standart Oil Change',
    monocrome: false,
  },
  {
    value_off: 15,
    type: 'Maintanance!',
    title: 'Standart Oil Change',
    description: 'Present this coupon and receive $15 OFF Standart Oil Change',
    monocrome: true,
  },
  {
    value_off: 10,
    type: 'Maintanance!',
    title: 'Standart Oil Change',
    description: 'Present this coupon and receive $15 OFF Standart Oil Change',
    monocrome: false,
  },
  {
    value_off: 15,
    type: 'Maintanance!',
    title: 'Standart Oil Change',
    description: 'Present this coupon and receive $15 OFF Standart Oil Change',
    monocrome: true,
  },
  {
    value_off: 10,
    type: 'Maintanance!',
    title: 'Standart Oil Change',
    description: 'Present this coupon and receive $15 OFF Standart Oil Change',
    monocrome: false,
  },
];
