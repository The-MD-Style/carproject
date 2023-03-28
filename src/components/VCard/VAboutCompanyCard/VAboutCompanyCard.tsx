import React from 'react';
import VAboutCompanyCardView from './VAboutCompanyCard.view';
import { fillThirdCardData } from './VAboutCompanyCard.map';

type Props = {};

const VAboutCompanyCard: React.FC<Props> = (props: Props) => {
  return <VAboutCompanyCardView fillData={fillThirdCardData}></VAboutCompanyCardView>;
};

export default VAboutCompanyCard;
