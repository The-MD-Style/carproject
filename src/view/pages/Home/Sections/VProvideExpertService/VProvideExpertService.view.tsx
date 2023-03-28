import React from 'react';

import VTitle from 'components/VTitle/VTitle';

import classes from './VProvideExpertService.module.scss';
import { IHomeTab, ITab } from 'models/home.model';
import VTabTitle from 'components/VTabTitle/VTabTitle';

type Props = {
  homePageTabs: IHomeTab[];
  homeTabs: ITab[];
  value: string;
  handleState: (tab: string) => void;
};

const VProvideExpertServiceView = (props: Props) => {
  return (
    <div className={classes['tabs']}>
      <VTitle className={classes['title']} title="We Provide Expert Service">
        We aim to earn your trust and have a long term relationship with you
      </VTitle>
      <div className={classes['tabBlock']}>
        {props.homePageTabs.map((item: IHomeTab, index: number) => {
          return (
            <React.Fragment key={item.id}>
              <VTabTitle
                isActive={item.id === props.value}
                icon={item.icon}
                title={item.title}
                onClick={() => props.handleState(item.id)}
              ></VTabTitle>
              {index !== props.homePageTabs.length - 1 && <div className={classes['line']}></div>}
            </React.Fragment>
          );
        })}
      </div>
      <div className={classes['tab']}>{props.homeTabs.find((item: ITab) => item.id === props.value).tab}</div>
    </div>
  );
};

export default VProvideExpertServiceView;
