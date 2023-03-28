import React from 'react';

import VContactFormView from './VContactForm.view';

type Props = {
  btnText: string;
  title?: string;
  text?: string;
};

const VContactForm: React.FC<Props> = (props: Props) => {
  return <VContactFormView btnText={props.btnText} title={props.title} text={props.text}></VContactFormView>;
};

export default VContactForm;
