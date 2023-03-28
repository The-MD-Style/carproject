import React, { useState } from 'react';

import classes from './VQuestion.module.scss';

type Props = {
  title: string;
  answer: string;
};

const VQuestionView: React.FC<Props> = (props: Props) => {
  const [isActiveState, isActiveStateState] = useState(false);

  return (
    <div className={classes['wrapper']}>
      <div className={`${classes['container']} ${isActiveState && classes['active']}`} onClick={() => isActiveStateState((prev) => !prev)}>
        <p className={classes['que']}>{props.title}</p>
        <p className={classes['btn']}>{isActiveState ? '-' : '+'}</p>
      </div>
      {isActiveState && <div className={classes['answer']}>{props.answer}</div>}
    </div>
  );
};

export default VQuestionView;
