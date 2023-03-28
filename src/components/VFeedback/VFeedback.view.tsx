import React from 'react';
import Image from 'next/image';

import classes from './VFeedback.module.scss';

type Props = {
  isDark?: boolean;
  text: string;
  name: string;
  function: string;
  image?: string;
};

const VFeedbackView: React.FC<Props> = (props: Props) => {
  return (
    <div className={`${classes['container']} ${props.isDark ? classes['dark'] : ''}`}>
      <p className={classes['text']}>{props.text}</p>
      <div className={classes['bottom']}>
        <Image className={classes['img']} src={props.image} alt="image" height={63} width={63} />
        <div className={classes['nameFunction']}>
          <p className={classes['name']}>{props.name}</p>
          <p className={classes['function']}>{props.function}</p>
        </div>
      </div>
    </div>
  );
};

export default VFeedbackView;
