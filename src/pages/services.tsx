import React, { useState } from 'react';
import { NextPage } from 'next';

import ServicesView from '../view/pages/Services/Services.view';

type Props = {};

const Services: NextPage = (props: Props) => {
  const [contentState, setContentState] = useState<string>('Preventative Maintenance');

  const handleSetState = (name: string) => setContentState(name);
  return <ServicesView value={contentState} handleSetState={handleSetState}></ServicesView>;
};

export default Services;
