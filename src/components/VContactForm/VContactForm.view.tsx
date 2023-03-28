import React, { useState } from 'react';

import VButton from 'components/VButton/VButton';
import VInput from 'components/VInput/VInput';
import VTitle from 'components/VTitle/VTitle';

import classes from './VContactForm.module.scss';

type Props = {
  btnText: string;
  title?: string;
  text?: string;
};

const VContactFormView: React.FC<Props> = (props: Props) => {
  const [nameState, setNameState] = useState<string>('');
  const [emailState, setEmailState] = useState<string>('');
  const [questionState, setQuestionState] = useState<string>('');
  return (
    <div className={classes['container']}>
      <VTitle title={props.title}>{props.text}</VTitle>
      <div className={classes['inputArea']}>
        <VInput
          isContact
          value={nameState}
          onChange={(e) => setNameState(e.target.value)}
          placehoder={'Your Name'}
          width={'331px'}
          height={'50px'}
        ></VInput>

        <VInput
          isContact
          value={emailState}
          onChange={(e) => setEmailState(e.target.value)}
          placehoder={'address@yourmail.com'}
          width={'331px'}
          height={'50px'}
        ></VInput>
      </div>
      <textarea
        value={questionState}
        onChange={(e) => setQuestionState(e.target.value)}
        className={classes['area']}
        cols={10}
        rows={20}
        aria-required="true"
        aria-invalid="true"
        placeholder="Your Question..."
      ></textarea>
      <VButton
        className={classes['btn']}
        type={'submit'}
        onClick={() => {
          setEmailState('');
          setNameState('');
          setQuestionState('');
        }}
      >
        {props.btnText}
      </VButton>
    </div>
  );
};

export default VContactFormView;
