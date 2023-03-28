import React from 'react';
import VAutoSectionView from './VAutoSection.view';

type Props = {
  image: string;
};

const VAutoSection: React.FC<Props> = (props: Props) => {
  return <VAutoSectionView image={props.image}></VAutoSectionView>;
};

export default VAutoSection;
