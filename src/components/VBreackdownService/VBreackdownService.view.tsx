import VIcon from 'components/VIcon/VIcon';
import React from 'react';

import classes from './VBreackdownService.module.scss';

type Props = {};

const VBreackdownServiceView = (props: Props) => {
  return (
    <div className={classes['wrapper']}>
      <div className={classes['icon']}>
        <VIcon name={'car'} width={45}></VIcon>
      </div>
      <div className={classes['details']}>
        <div className={classes['title']}>24 Hour Breakdown Service</div>
        <div className={classes['text']}>To order a Breakdown Recovery Service now or if you require a quote, please contact us</div>
      </div>
      <div className={classes['contacts']}>
        <div className={classes['title']}>
          <VIcon name={'phone'} width={20} /> 1-800-123-4567
        </div>
        <div className={classes['text']}>Whether you’re the driver of your own car or a rental, you’re covered 24/7, 365 days a year</div>
      </div>
    </div>
  );
};

export default VBreackdownServiceView;
