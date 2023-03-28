import React from 'react';

import VQuestionView from './VQuestion.view';

type Props = {
  title: string;
  answer: string;
};

const VQuestion: React.FC<Props> = (props: Props) => {
  return <VQuestionView title={props.title} answer={props.answer}></VQuestionView>;
};

export default VQuestion;
