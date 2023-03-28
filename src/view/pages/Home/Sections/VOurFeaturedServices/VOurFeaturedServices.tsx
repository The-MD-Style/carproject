import { IFeaturedData, IService } from 'models/home.model';
import React, { useState } from 'react';
import VOurFeaturedServicesView from './VOurFeaturedServices.view';

type Props = {
  serviceMap: IService[];
  IFeaturedData: IFeaturedData[];
};

const VOurFeaturedServices: React.FC<Props> = (props: Props) => {
  const [featureState, setFeatureState] = useState<string>('Diagnostics');

  const handleSetFeature = (feature: string) => setFeatureState(feature);

  return (
    <VOurFeaturedServicesView
      value={featureState}
      featuredData={props.IFeaturedData}
      serviceMap={props.serviceMap}
      handleSet={handleSetFeature}
    ></VOurFeaturedServicesView>
  );
};

export default VOurFeaturedServices;
