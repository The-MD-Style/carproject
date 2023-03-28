import React from 'react';
import VIcon from 'components/VIcon/VIcon';
import VSeparator from 'components/VSeparator/VSeparator';
import classes from './VAboutCompanyCard.module.scss';
import { IFirstCardData } from 'models/card.model';

type Props = {
  fillData: IFirstCardData[];
};

const VAboutCompanyCardView: React.FC<Props> = (props: Props) => {
  return (
    <div className={classes['container']}>
      <div className={classes['left']}>
        <p className={classes['title']}>About Car Repair Services</p>
        <VSeparator></VSeparator>
        <p className={classes['description']}>
          We use the latest diagnostic equipment to guarantee your vehicle is repaired or serviced properly and in a timely fashion. We are
          a member of Professional Auto Service, an elite performance network, where independent service facilities share common goals of
          being world-class automotive service centers.
        </p>
        <ul className={classes['list']}>
          {props.fillData.map((item: IFirstCardData, index: number) => (
            <li key={index} className={classes['listItem']}>
              {<VIcon className={classes['icon']} name="wrench" width={13} height={13}></VIcon>} {item.description}
            </li>
          ))}
        </ul>
      </div>
      <div className={classes['right']}>
        <div className={classes['play']}>
          <VIcon name={'play'} width={75} height={75} className={classes['icon']}></VIcon>
        </div>
      </div>
      <p className={classes['text']}>About Company</p>
    </div>
  );
};

export default VAboutCompanyCardView;
