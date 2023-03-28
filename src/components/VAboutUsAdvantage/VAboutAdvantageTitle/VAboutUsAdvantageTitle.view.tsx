import React from 'react';
import VButton from 'components/VButton/VButton';
import VSeparator from 'components/VSeparator/VSeparator';
import classes from './VAboutUsAdvantage.module.scss';

type Props = {};

const VAboutUsAdvantageTitleView = (props: Props) => {
  return (
    <div className={classes['container']}>
      <h3 className={classes['title']}>
        Advantages of <span style={{ color: 'yellow' }}>Our Service</span>
      </h3>
      <VSeparator />
      <p className={classes['text']}>Auto servicing your car is an essential task that should not be ignored or forgotten. </p>
      <VButton type={'button'}></VButton>
    </div>
  );
};

export default VAboutUsAdvantageTitleView;
