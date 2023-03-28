import React from 'react';

import VIcon from 'components/VIcon/VIcon';
import classes from './VOurAdvantagesCard.module.scss';

import { ISecondCardData } from 'models/card.model';

type Props = {
  fillData: ISecondCardData[];
};

const VOurAdvantagesCardView: React.FC<Props> = (props: Props) => {
  return (
    <div className={classes['container']}>
      <div className={classes['wrapper']}>
        {props.fillData.map((item: ISecondCardData, index: number) => {
          return (
            <div key={index} className={classes['item']}>
              <VIcon className={classes['icon']} name={'sqareCheck'} width={45} height={45}></VIcon>
              <div className={classes['block']}>
                <p className={classes['name']}>{item.name}</p>
                <p className={classes['description']}>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <p className={classes['text']}>Advantages</p>
    </div>
  );
};

export default VOurAdvantagesCardView;
