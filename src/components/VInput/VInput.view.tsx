import React from 'react';

import classes from './VInput.module.scss';

type Props = {
  isContact?: boolean;
  name?: string;
  label?: string;
  type?: string;
  width?: string;
  height?: string;
  placehoder?: string;
  value: string | number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const VInputView: React.FC<Props> = (props: Props) => {
  return (
    <div className={classes['wrapper']}>
      {props.label && <label className={classes['label']}>{props.label}</label>}
      <input
        style={{ width: `${props.width}`, height: `${props.height}` }}
        className={`${(props.isContact && classes['contactInput']) || classes['input']}`}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        type={props.type ?? 'text'}
        placeholder={props.placehoder}
      />
    </div>
  );
};

export default VInputView;
