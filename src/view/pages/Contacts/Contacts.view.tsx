import React from 'react';

import VContactElement from 'components/VContactElement/VContactElement';
import VContactForm from 'components/VContactForm/VContactForm';

import classes from './Contacts.module.scss';
import { IContact } from 'models/contacts.model';

type Props = {
  contactsFill: IContact[];
};

const ContactsView: React.FC<Props> = (props: Props) => {
  return (
    <React.Fragment>
      <div className={classes['container']}>
        <div className={classes['left']}>
          <VContactForm
            btnText={'Contact Us'}
            title={'Get In Touch!'}
            text={'Get your automotive-related questions answered by a mechanic '}
          ></VContactForm>
        </div>
        <div className={classes['contacts']}>
          {[
            props.contactsFill.map((item: IContact) => (
              <VContactElement key={item.title} icon={item.icon} title={item.title}>
                {item.text}
              </VContactElement>
            )),
          ]}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactsView;
