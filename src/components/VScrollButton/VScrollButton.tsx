import React from 'react';
import VScrollButtonView from './VScrollButton.view';

type Props = {};

const VScrollButton = (props: Props) => {
  const scrollOnClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return <VScrollButtonView scrollOnClick={scrollOnClick}></VScrollButtonView>;
};

export default VScrollButton;
