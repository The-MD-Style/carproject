import React, { PropsWithChildren } from 'react';
import Image from 'next/image';

import classes from './VCustomerReviews.module.scss';
import VIcon from 'components/VIcon/VIcon';

type Props = {
  curentPage: number;
  function: string;
  image: string;
  stars: number;
  pages: number;
  name: string;
};

const VCustomerReviewsView: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) => {
  return (
    <div className={classes['container']}>
      <div className={classes['photoContainer']}>
        <Image className={classes['photo']} src={props.image} alt={'photo'} height={597} width={851} layout="fixed"></Image>
      </div>
      <div className={classes['review']}>
        <p className={classes['title']}>Customer Reviews</p>
        <div className={classes['rating']}>
          {Array(props.stars)
            .fill(0)
            .map((index: number) => (
              <div key={index} className={classes['star']}>
                <VIcon name={'star'} width={10}></VIcon>
              </div>
            ))}
        </div>
        <p className={classes['comment']}>{props.children}</p>
        <p className={classes['name']}>
          – {props.name}, <span className={classes['function']}>{props.function}</span>
        </p>

        <p className={classes['page']}>
          <span className={classes['current']}>{props.curentPage}</span>
          <span className={classes['separator']}>/</span>
          <span className={classes['pages']}>{props.pages}</span>
        </p>
      </div>
    </div>
  );
};

export default VCustomerReviewsView;
