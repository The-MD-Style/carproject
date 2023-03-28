import React from 'react';
import VAdditionalServicesCardView from './VAdditionalServicesCard.view';
import { fillFirstCardData } from './VAdditionalServicesCard.map';

type Props = {};

const VAdditionalServicesCard: React.FC<Props> = () => {
  return <VAdditionalServicesCardView fillData={fillFirstCardData}></VAdditionalServicesCardView>;
};

export default VAdditionalServicesCard;
