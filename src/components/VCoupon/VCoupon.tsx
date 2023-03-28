import React from 'react';
import VCouponView from './VCoupon.view';

type Props = {
  value_off: number;
  type: string;
  title: string;
  description: string;
  monocrome: boolean;
};

const VCoupon: React.FC<Props> = (props: Props) => {
  return (
    <VCouponView
      value_off={props.value_off}
      type={props.type}
      title={props.title}
      description={props.description}
      monocrome={props.monocrome}
    ></VCouponView>
  );
};

export default VCoupon;
