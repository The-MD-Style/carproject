import VTitle from 'components/VTitle/VTitle';
import SectionContainer from 'Containers/SectionContainer/SectionContainer';
import { IWidget } from 'models/home.model';
import React from 'react';
import classes from './VWidgets.module.scss';

type Props = {
  widgetMap: IWidget[];
};

const VWidgetsView = (props: Props) => {
  return (
    <SectionContainer className={classes['widgets']}>
      <VTitle title="How It Works">These few steps will help return your car to a working condition </VTitle>
      <div className={classes['items']}>
        {props.widgetMap.map((item: IWidget) => {
          return (
            <div key={item.decoration} className={classes['item']}>
              <div className={classes['decoration']}>
                <p className={classes['text']}>{item.decoration}</p>
              </div>
              <p className={classes['name']}>{item.name}</p>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
};

export default VWidgetsView;
