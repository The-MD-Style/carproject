import React from 'react';

import SectionContainer from 'Containers/SectionContainer/SectionContainer';
import VContactForm from 'components/VContactForm/VContactForm';
import VQuestion from 'components/VQuestion/VQuestion';

import { IQuestion } from 'models/faq.model';
import classes from './FAQ.module.scss';

export type Props = {
  queFill: IQuestion[];
};

const FAQView = (props: Props) => {
  return (
    <React.Fragment>
      <SectionContainer className={classes['faq']}>
        <div className={classes['question']}>
          <div className={classes['left']}>
            {props.queFill.slice(0, Math.round(props.queFill.length / 2)).map((item: IQuestion) => (
              <VQuestion key={item.title} title={item.title} answer={item.answer}></VQuestion>
            ))}
          </div>
          <div className={classes['right']}>
            {props.queFill.slice(Math.round(props.queFill.length / 2)).map((item: IQuestion) => (
              <VQuestion key={item.title} title={item.title} answer={item.answer}></VQuestion>
            ))}
          </div>
        </div>
        <div className={classes['contactWrapper']}>
          <VContactForm
            btnText={'Ask Question'}
            title={'Have a Car Repair Question?'}
            text={' Get your automotive-related questions answered by a mechanic'}
          ></VContactForm>
        </div>
      </SectionContainer>
    </React.Fragment>
  );
};

export default FAQView;
