import React from 'react';

import { fillSecondCardData } from './VOurAdvantagesCard.map';
import VOurAdvantagesCardView from './VOurAdvantagesCard.view';

type Props = {};

const VSecondCard: React.FC<Props> = (props: Props) => {
  return <VOurAdvantagesCardView fillData={fillSecondCardData}></VOurAdvantagesCardView>;
};

export default VSecondCard;
