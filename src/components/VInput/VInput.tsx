import React from 'react';

import VInputView from './VInput.view';

type Props = {
  isContact?: boolean;
  name?: string;
  type?: string;
  label?: string;
  width?: string;
  height?: string;
  placehoder?: string;
  value: string | number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const VInput = (props: Props) => {
  return <VInputView {...props}></VInputView>;
};

export default VInput;
