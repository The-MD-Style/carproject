import VAboutCompanyCard from 'components/VCard/VAboutCompanyCard/VAboutCompanyCard';
import VAdditionalServicesCard from 'components/VCard/VAdditionalServicesCard/VAdditionalServicesCard';
import VOurAdvantagesCard from 'components/VCard/VOurAdvantagesCard/VOurAdvantagesCard';

import { IHomeTab as ITabTitle, ICars, IPricingCard, ICounter, IService, ITab, IWidget, IFeaturedData, IReviews } from 'models/home.model';
import car from 'assets/images/backgrounds/bmw.png';

export const serviceMap: IService[] = [
  {
    iconName: 'gear',
    title: 'Diagnostics',
  },
  {
    iconName: 'engine',
    title: 'Engine Repair',
  },
  {
    iconName: 'oil',
    title: 'Oil / Lube / Filters',
  },
  {
    iconName: 'tire',
    title: 'Tires',
  },
  {
    iconName: 'shift',
    title: 'Transmission',
  },
  {
    iconName: 'battery',
    title: 'Batteries',
  },
];
export const FeaturedData: IFeaturedData[] = [
  {
    name: 'Diagnostics',
    description: 'If your engine is sick or tired we have the equipment to check, diagnose and efficiently fix any problem you may have.',
  },
  {
    name: 'Engine Repair',
    description:
      'Morbi vitae nibh eu enim convallis porttitor. Etiam sit amet fermentum diam, in aliquam erat. In nisi neque, pretium in quam.',
  },
  {
    name: 'Oil / Lube / Filters',
    description:
      'Pellentesque urna urna, rhoncus vitae elit id, maximus dictum arcu. Nulla malesuada dui eu efficitur aliquet. In nisi neque.',
  },
  {
    name: 'Tires',
    description:
      'Ut vitae quam et urna ultrices volutpat. Sed scelerisque tristique posuere. Praesent dapibus ligula eget sollicitudin congue.',
  },
  {
    name: 'Transmission',
    description: 'Donec massa nibh, placerat eu lobortis ut, ornare in massa. Quisque pellentesque, turpis sit amet ullamcorper mollis.',
  },
  {
    name: 'Batteries',
    description: 'Nunc porttitor in tellus a rutrum. Curabitur in ante dui. Sed id erat eget libero egestas mollis et id dolor.',
  },
];

export const widgetMap: IWidget[] = [
  {
    name: 'Choose YOUR SERVICE',
    decoration: '01',
  },
  {
    name: 'Make an APPOINTMENT',
    decoration: '02',
  },
  {
    name: `We'll take YOUR CAR for repair`,
    decoration: '03',
  },
  {
    name: 'PICK UP your car keys',
    decoration: '04',
  },
];

export const counterMap: ICounter[] = [
  {
    value: '20',
    text: 'Years of Experience',
  },
  {
    value: '2.9k',
    text: 'Vehicle Repaired',
  },
  {
    value: '32',
    text: 'Technicians & Workers',
  },
  {
    value: '100%',
    text: ' Satisfied Customers',
  },
];
export const homePageTabs: ITabTitle[] = [
  {
    id: 'first',
    title: 'Additional Services',
    icon: 'gear',
  },
  {
    id: 'second',
    title: 'Our Advandages',
    icon: 'car',
  },
  {
    id: 'third',
    title: 'About Company',
    icon: 'wrench',
  },
];

export const homeTabs: ITab[] = [
  {
    id: 'first',
    tab: <VAdditionalServicesCard></VAdditionalServicesCard>,
  },
  {
    id: 'second',
    tab: <VOurAdvantagesCard></VOurAdvantagesCard>,
  },
  {
    id: 'third',
    tab: <VAboutCompanyCard></VAboutCompanyCard>,
  },
];

export const carsFillData: ICars[] = [
  {
    photo: car.src,
  },
  {
    photo: car.src,
  },
  {
    photo: car.src,
  },
  {
    photo: car.src,
  },
  {
    photo: car.src,
  },
  {
    photo: car.src,
  },
  {
    photo: car.src,
  },
  {
    photo: car.src,
  },
  {
    photo: car.src,
  },
  {
    photo: car.src,
  },
  {
    photo: car.src,
  },
];

export const reviewsData: IReviews[] = [
  {
    title: 'Years of Experience',
    number: 20,
  },
  {
    title: 'Vehicle Repaired',
    number: '2. 9k',
  },
  {
    title: 'Technicians & Workers',
    number: 32,
  },
  {
    title: 'Satisfied Customers ',
    number: '100%',
  },
];
