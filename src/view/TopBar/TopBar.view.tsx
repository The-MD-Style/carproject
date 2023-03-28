import React from 'react';

import VIcon from 'components/VIcon/VIcon';
import SectionContainer from 'Containers/SectionContainer/SectionContainer';
import VButton from 'components/VButton/VButton';

import classes from './TopBar.module.scss';

type Props = {};

const TopBarView: React.FC<Props> = (props: Props) => {
  return (
    <SectionContainer isContained className={classes['container']}>
      <div className={classes['info']}>
        <div className={classes['item']}>
          <VIcon className={classes['icon']} name="clock" width={14} height={14}></VIcon>
          <p>Monday-Saturday 7:00AM - 6:00PM</p>
        </div>
        <div className={classes['item']}>
          <VIcon className={classes['icon']} name="phone" width={14} height={14}></VIcon>
          <p>
            Schedule Your Appointment <span>1-800-123-45670</span>
          </p>
        </div>
        <div className={classes['item']}>
          <VIcon className={classes['icon']} name="location" width={14} height={14}></VIcon>
          <p>2605 Caton Hill Road, Woodbridge, VA 221920</p>
        </div>
      </div>
      <VButton type="submit" className={classes['button']}>
        <VIcon name={'arrowCircleRight'} width={25} height={25}></VIcon>
        <p className={classes['paragraph']}>Appointment</p>
      </VButton>
    </SectionContainer>
  );
};

export default TopBarView;
