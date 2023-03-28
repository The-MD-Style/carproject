import React from 'react';

import classes from './VCoupon.module.scss';

type Props = {
  value_off: number;
  type: string;
  title: string;
  description: string;
  monocrome: boolean;
};

const VCouponView: React.FC<Props> = (props: Props) => {
  return (
    <div className={`${classes['coupon']} ${props.monocrome ? classes['coupon--active'] : ''}`}>
      <div className={classes['header']}>
        <time className={classes['expires']}>Expires: 11/25/2022</time>
        <div className={classes['value-off']}>
          <span>$</span> {props.value_off} off
        </div>
        <div className={classes['type']}>{props.type}</div>
      </div>
      <div className={classes['content']}>
        <div className={classes['content-title']}>{props.title}</div>
        <div className={classes['content-description']}>{props.description}</div>
        <button className={classes['print-button']}>Print Coupon</button>
      </div>
    </div>
  );
};

export default VCouponView;
