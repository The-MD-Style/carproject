import React, { memo } from 'react';
import Link from 'next/link';

import SectionContainer from 'Containers/SectionContainer/SectionContainer';
import VIcon from 'components/VIcon/VIcon';

import { IContactInfo, IFooterMapIcons } from 'models/footer.model';
import classes from './Footer.module.scss';

type Props = {
  footerMapIcon: IFooterMapIcons[];
  contactInfo: IContactInfo[];
  oppeningHours: IContactInfo[];
};

const FooterView: React.FC<Props> = (props: Props) => {
  return (
    <footer className={classes['wrapper']}>
      <div className={classes['map']}>
        <iframe
          className={classes['frameMap']}
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21773.754783489545!2d28.872750449999998!3d46.986846799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1661179181903!5m2!1sen!2s"
          loading="lazy"
        ></iframe>
        <SectionContainer className={classes['overlay']}>
          <div className={classes['inner']}>
            <div className={classes['infoBlock']}>
              <p className={classes['title']}>Contact Info</p>
              {props.contactInfo.map((item: IContactInfo, key: number) => {
                return (
                  <div className={classes['address']} key={key}>
                    <VIcon className={classes['icon']} name={item.name}></VIcon>
                    <div className={classes['paragraph']}>{` ${item.text}`}</div>
                  </div>
                );
              })}
            </div>
            <div className={classes['infoBlock']}>
              <p className={classes['title']}>Opening Hours</p>
              <div className={classes['address']}>
                <VIcon className={classes['icon']} name="clock"></VIcon>
                <div>
                  {props.oppeningHours.map((item: IContactInfo, key: number) => {
                    return (
                      <address className={classes['paragraph']} key={key}>
                        {item.text}: <span className={classes['time']}>{item.span}</span>
                      </address>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </div>

      <SectionContainer className={classes['bottom']}>
        <div className={classes['inner']}>
          <p className={classes['copyright']}>© 2022 Car Repair Services, All Rights Reserved</p>
          <ul className={classes['list']}>
            {props.footerMapIcon.map((item: IFooterMapIcons, index: number) => {
              return (
                <li className={classes['icon']} key={index}>
                  <Link href="/#">
                    <a>
                      <VIcon className={classes['content']} name={item.name}></VIcon>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </SectionContainer>
    </footer>
  );
};

export default memo(FooterView);
