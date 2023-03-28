import { IWidget } from 'models/home.model';
import React from 'react';
import VWidgetsView from './VWidgets.view';

type Props = {
  widgetMap: IWidget[];
};

const VWidgets = (props: Props) => {
  return <VWidgetsView widgetMap={props.widgetMap}></VWidgetsView>;
};

export default VWidgets;
