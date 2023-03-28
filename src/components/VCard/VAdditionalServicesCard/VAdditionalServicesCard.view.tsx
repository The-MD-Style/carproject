import React from 'react';

import classes from './VAdditionalServicesCard.module.scss';
import VIcon from 'components/VIcon/VIcon';

import { IFirstCardData } from 'models/card.model';

type Props = {
  fillData: IFirstCardData[];
};

const VAdditionalServicesCardView = (props: Props) => {
  return (
    <div className={classes['container']}>
      <div className={classes['right']}>
        <p className={classes['headText']}> Below are some of the many auto repair services we offer:</p>
        <ul className={classes['list']}>
          {props.fillData.map((item: IFirstCardData, index: number) => (
            <li key={index} className={classes['listItem']}>
              {<VIcon className={classes['icon']} name="wrench" width={11} height={11}></VIcon>} {item.description}
            </li>
          ))}
        </ul>
        <p className={classes['bottomText']}>Additional</p>
      </div>
    </div>
  );
};

export default VAdditionalServicesCardView;
