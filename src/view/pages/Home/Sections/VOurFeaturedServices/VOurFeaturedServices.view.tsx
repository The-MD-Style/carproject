import React from 'react';
import Image from 'next/image';

import SectionContainer from 'Containers/SectionContainer/SectionContainer';
import classes from './VOurFeaturedServices.module.scss';
import VTitle from 'components/VTitle/VTitle';
import VIcon from 'components/VIcon/VIcon';

import serviceImg from 'assets/images/service.png';
import { IFeaturedData, IService } from 'models/home.model';
import VButtonLink from 'components/VButtonLink/VButtonLink';

type Props = {
  serviceMap: IService[];
  featuredData: IFeaturedData[];
  value: string;
  handleSet: (feature: string) => void;
};

const VOurFeaturedServicesView: React.FC<Props> = (props: Props) => {
  return (
    <SectionContainer className={classes['features']}>
      <VTitle title="Our Featured Services">We offer full service auto repair & maintenance</VTitle>
      <div className={classes['inner']}>
        <ul className={classes['btnList']}>
          {props.serviceMap.map((link: IService) => (
            <div
              key={link.title}
              className={`${classes['link']} ${props.value === link.title ? classes['activeFeature'] : ''}`}
              onClick={() => props.handleSet(link.title)}
            >
              <VIcon width={36} height={36} className={classes['icon']} name={link.iconName}></VIcon>
              <div className={classes['name']}>{link.title}</div>
            </div>
          ))}
        </ul>
        <div className={classes['showcase']}>
          <div className={classes['description']}>
            <VIcon width={90} height={20} name={'gear'} className={classes['descriptionIcon']}></VIcon>
            <p className={classes['text']}>{props.featuredData.find((item) => item.name === props.value).description}</p>
          </div>
          <p className={classes['paragraph']}>Our Services</p>
          <Image src={serviceImg} alt="service.png" />
          <ul className={classes['iconList']}>
            {props.serviceMap.map((link: IService) => (
              <div
                key={link.title}
                onClick={() => props.handleSet(link.title)}
                className={`${classes['link']} ${props.value === link.title ? classes['activeIcon'] : ''}`}
              >
                <VIcon width={25} className={classes['icons']} name={link.iconName}></VIcon>
              </div>
            ))}
          </ul>
          <VButtonLink className={classes['btn']} href={'#'}>
            Know More
          </VButtonLink>
        </div>
      </div>
    </SectionContainer>
  );
};

export default VOurFeaturedServicesView;
