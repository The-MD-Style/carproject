import React from 'react';
import Image from 'next/image';

import classes from './VFeedback.module.scss';
import VIcon from 'components/VIcon/VIcon';

type Props = {
  image?: string;
  text: string;
  name: string;
};

const VFeedbackSlideView: React.FC<Props> = (props: Props) => {
  return (
    <div className={classes['slide']}>
      <div className={classes['img']}>
        <Image className={classes['photo']} src={props.image} alt={'photo'} width={179} height={179} />
        <div className={classes['bottomDots']}>
          <VIcon name={'message'} width={40} className={classes['dots']}></VIcon>
        </div>
      </div>
      <p className={classes['text']}>{props.text}</p>
      <p className={classes['name']}>{props.name}</p>
    </div>
  );
};

export default VFeedbackSlideView;
