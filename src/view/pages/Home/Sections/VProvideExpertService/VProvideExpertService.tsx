import { IHomeTab, ITab } from 'models/home.model';
import React, { useState } from 'react';
import VProvideExpertServiceView from './VProvideExpertService.view';

type Props = {
  homePageTabs: IHomeTab[];
  homeTabs: ITab[];
};

const VProvideExpertService = (props: Props) => {
  const [tabState, setTabState] = useState<string>('first');
  const handleSetTab = (tab: string) => setTabState(tab);

  return (
    <VProvideExpertServiceView
      homePageTabs={props.homePageTabs}
      handleState={handleSetTab}
      value={tabState}
      homeTabs={props.homeTabs}
    ></VProvideExpertServiceView>
  );
};

export default VProvideExpertService;
