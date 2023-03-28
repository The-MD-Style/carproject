import { ICars } from 'models/home.model';
import React, { useState } from 'react';
import VBrandsView from './VBrands.view';

type Props = {
  carsFillData: ICars[];
};

const VBrands = (props: Props) => {
  const [isActiveState, setIsActiveState] = useState<boolean>(false);

  const handleState = () => setIsActiveState((prev) => !prev);

  return <VBrandsView carsFillData={props.carsFillData} value={isActiveState} handleState={handleState}></VBrandsView>;
};

export default VBrands;
