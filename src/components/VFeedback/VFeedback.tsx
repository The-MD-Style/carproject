import React from 'react';

import VFeedbackView from './VFeedback.view';

type Props = {
  isDark?: boolean;
  text: string;
  name: string;
  function: string;
  image?: string;
};

const VFeedback: React.FC<Props> = (props: Props) => {
  return (
    <VFeedbackView isDark={props.isDark} text={props.text} name={props.name} function={props.function} image={props.image}></VFeedbackView>
  );
};

export default VFeedback;
