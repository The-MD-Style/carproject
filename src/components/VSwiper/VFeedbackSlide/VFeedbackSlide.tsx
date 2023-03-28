import React from 'react';

import VFeedbackSlideView from './VFeedbackSlide.view';

type Props = {
  image?: string;
  text: string;
  name: string;
};

const VFeedbackSlide: React.FC<Props> = (props: Props) => {
  return <VFeedbackSlideView text={props.text} name={props.name} image={props.image}></VFeedbackSlideView>;
};

export default VFeedbackSlide;
