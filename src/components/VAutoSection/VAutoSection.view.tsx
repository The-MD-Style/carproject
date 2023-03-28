import React from 'react';
import Image from 'next/image';

import classes from './VAutoSection.module.scss';

type Props = {
  image: string;
};

const VAutoSectionView: React.FC<Props> = (props: Props) => {
  return (
    <div className={classes['container']}>
      <Image src={props.image} alt={'brand'} className={classes['image']} width={90} height={90} />
    </div>
  );
};

export default VAutoSectionView;
